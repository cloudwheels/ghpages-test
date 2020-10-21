const DASHUSD = 70.00;


$(document).ready(function () {

    jQuery.support.cors = true;

    $.ajax(
        {
            type: "GET",
            url: 'https://api.trello.com/1/board/D5wypdJ0/cards?checklists=all&fields=id,name,idList,shortUrl,desc&customFieldItems=true&members=true&member_fields=username&key=910955be8cf85efce2eb715fea302f2b',
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {

                //got all card data
                //console.log('Got all card data:');
                //console.dir(data);

                //remove any cards from the concepts list and archive list
                const listIdConcepts = '5f6f3b657a973a233675ae09';
                const listIdArchive = '5f6f3be749ba1e07429a82a5';

                let removedConcepts = data.filter(item => item.idList !== listIdConcepts && item.idList !== listIdArchive);

                //only get cards with checklists
                let withChecklists = removedConcepts.filter(item => item.checklists.length > 0);

                //process checklist items into array of task objects
                let tasks = [];
                withChecklists.map(card => {

                    let cardId = card.id;
                    let cardName = card.name;
                    let cardDesc = card.desc;
                    let listId = card.idList;
                    let cardUrl = card.shortUrl;
                    let cardAdmin = null;
                    if (card.members.length > 0) {
                        cardAdmin = card.members[0].username;
                    }
                    let cardCustomFields = processCustomFields(card.customFieldItems);
                    card.checklists.map(checklist => {
                        let checklistName = checklist.name;
                        //We don't need Concept Tasks
                        if (checklistName != 'Concept Tasks') {
                            checklist.checkItems.map(checklistItem => {

                                let checklistItemIdMember = checklistItem.idMember;

                                //only bother adding if it doesn't have an assigned member
                                if (checklistItemIdMember == null) {
                                    let taskId = checklistItem.id;
                                    let checklistItemName = checklistItem.name;
                                    let extractedDashAmount = extractReward(checklistItemName);
                                    //convert to USD 
                                    //TODO: Use live rates
                                    let dashAmountFloat = null;
                                    let dashUSDAmount = null;
                                    if (extractedDashAmount !== null) {
                                        dashAmountFloat = parseFloat(extractedDashAmount);
                                        //TODO error handling
                                        dashUSDAmount = dashAmountFloat * DASHUSD;
                                    }

                                    tasks.push({ taskId: taskId, cardId: cardId, cardName: cardName, cardDesc: cardDesc, listId: listId, cardUrl: cardUrl, admin: cardAdmin, workType: cardCustomFields.workType, cardSkills: cardCustomFields.skills, checklistName: checklistName, checklistItemName: checklistItemName, rewardDash: dashAmountFloat, rewardUSD: dashUSDAmount });
                                }
                            })
                        }

                    })

                })

                //console.log('all Tasks:');
                //console.dir(tasks);

                let totalTasks = tasks.length;
                console.log('total tasks:', totalTasks)

                //filter tasks to lists
                let lists = {}

                lists.project = tasks.filter(item => item.checklistName == 'Work Tasks' && item.workType == 'Project');
                lists.spec = tasks.filter(item => item.checklistName == 'Specification Tasks');
                lists.service = tasks.filter(item => item.checklistName == 'Work Tasks' && item.workType == 'Service');
                lists.job = tasks.filter(item => item.checklistName == 'Work Tasks' && item.workType == 'Job');
                lists.qa = tasks.filter(item => item.checklistName == 'QA Tasks');


                console.log('Lists:');
                console.dir(lists);

                //parse data to html tables & display
                $('#list_project').append(listToTable('project', 'Project', lists.project));
                $('#list_spec').append(listToTable('spec', 'Specification', lists.spec));
                $('#list_service').append(listToTable('service', 'Service', lists.service));
                $('#list_job').append(listToTable('job', 'Job', lists.job));
                $('#list_qa').append(listToTable('qa', 'QA', lists.qa));



            },

            error: function (msg) {

                alert(msg.responseText);
            }
        });
});

function processCustomFields(arrCustomFields) {
    //accepts an array of custom fields from card data
    //returns an object containing Work Type & Skills
    //constants for custom fields
    const customFieldWorkTypeId = '5f7dd2a9bd811d5f1437b453';
    const customFieldWorkTypeValueProject = '5f7dd2beb8da6c565657f42d';
    const customFieldWorkTypeValueService = '5f7dd2c01b60a744c58c41cd';
    const customFieldWorkTypeValueJob = '5f7dd2c27b967f3da54ba1bc';

    const customFieldSkillsId = '5f887cf52b330a6b74bd592b';

    let customFields = {};

    //get workType
    arrCustomFields.filter(field => field.idCustomField == customFieldWorkTypeId)
        .map(value => {
            switch (value.idValue) {
                case customFieldWorkTypeValueProject:
                    customFields.workType = 'Project'
                    break;
                case customFieldWorkTypeValueService:
                    customFields.workType = 'Service'
                    break;
                case customFieldWorkTypeValueJob:
                    customFields.workType = 'Job'
                    break;
                default: customFields.workType = null;
            }
        });

    //get Skills

    filterSkills = arrCustomFields.filter(field => field.idCustomField == customFieldSkillsId)
    if (filterSkills.length > 0) {
        filterSkills.map(value => {
            customFields.skills = value.value.text;
        });
    }
    else {
        customFields.skills = null;
    }
    return customFields;

}


function extractReward(strTaskDescription) {
    //extracts Dash Reward amount from task description
    //get last parenthesised text
    let lastLBracket = strTaskDescription.lastIndexOf("(");
    //console.log('lastLBracket',lastLBracket);
    let lastRBracket = strTaskDescription.lastIndexOf(")");
    //console.log('lastRBracket',lastRBracket);
    let lastBracketContent = strTaskDescription.substr(lastLBracket + 1, lastRBracket - lastLBracket - 1).trim().toUpperCase();
    //console.log('lastBracketContent',lastBracketContent);
    let posOfTextDash = lastBracketContent.indexOf("DASH");
    //console.log('posOfTextDash',posOfTextDash);
    let amountStr = lastBracketContent.substr(0, posOfTextDash).trim()
    //console.log('amountStr',amountStr);
    // TODO: $.isNumeric is DEPRECATED!
    // replace with pure JS implementation
    if ($.isNumeric(amountStr)) {
        return amountStr;
    }
    else {
        return null;
    }

}

function listToTable(tableId, projectHeaderName, data) {
    let strHTML = '';

    strHTML += `
    <table class="bounty-table" id="tbl_${tableId}">
                    <thead>
                        <tr>
                            <th>
                                <div class="left-column">Task</div>
                            </th>
                            <th>${projectHeaderName}</th>
                            <th>Skills</th>
                            <th>Reward</th>
                        </tr>
                    </thead>
                    <tbody>
    `
    data.map(item => {
        strHTML += `<tr><td><a href="./bounty-detail.html?bountytaskid=${item.taskId}&bountytrellourl=${item.cardUrl}&bountyname=${item.checklistItemName}&bountycardname=${item.cardName}&bountycarddesc=${item.cardDesc}&bountyrewardusd=${item.rewardUSD}&bountyrewarddash=${item.rewardDash}&bountyadmin=${item.admin}&bountyworktype=${item.worktype}"><div class="left-column">${item.checklistItemName}</div></a></td><td><div>${item.cardName}</div></td><td><div>${item.cardSkills}</div></td><td><div>${item.rewardDash} Dash ($${item.rewardUSD})</div></td></tr>`;
    });

    strHTML += `
                    </tbody>
                    </table>
    `

    return strHTML;



}
