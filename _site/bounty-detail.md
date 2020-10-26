<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v8.0"
    nonce="3TY5c3bh"></script>
<script>
    $(document).ready(async function () {

    let detailsTemplate =`<table>
    <tr>
        <td class="bounty-item-title">Project</td>
        <td>
            <div id="bounty-info-project"></div>
        </td>
    </tr>
    <tr>
        <td class="bounty-item-title">Project Description</td>
        <td>
            <div id="bounty-info-desc"></div>
        </td>
    </tr>
    <tr>
        <td class="bounty-item-title">Task #</td>
        <td>
            <div id="bounty-info-tasknumber"></div>
        </td>
    </tr>
    <tr>
        <td class="bounty-item-title">Task Description</td>
        <td>
            <div id="bounty-info-name"></div>
        </td>
    </tr>
    <tr>
        <td class="bounty-item-title">Reward</td>
        <td>
            <div id="bounty-info-reward"></div>
        </td>
    </tr>
    <tr>
        <td class="bounty-item-title">Work Type</td>
        <td>
            <div id="bounty-info-worktype"></div>
        </td>
    </tr>
    <tr>
        <td class="bounty-item-title">Admin</td>
        <td>
            <div id="bounty-info-admin"></div>
        </td>
    </tr>
    <tr>
        <td class="bounty-item-title">Status</td>
        <td>
            <div id="bounty-info-status"></div>
            Available
        </td>
    </tr>
</table>
<div id="trello-instructions">
<div id="rules-explanation">
</div>
<div id="bounty-info-trellolink"></div>
</div>
<div id="rules-link"></div>
<br>`

        //get all data
        $('#loading-data').show();
        
        try{
        let data = await getTrelloAllData();
        $('#loading-data').hide();
        let lists = transformTrelloData(data);
        let taskData = lists.project.concat(lists.spec, lists.service, lists.job, lists.qa);
        let taskId = decodeURIComponent(urlParam('taskid'));

        let foundTasks = getTaskById(taskData, taskId);

        if(foundTasks.length===1){

        $('#bounty-details').append(detailsTemplate);

        let task = foundTasks[0];

        let workType = task.workType;
        let taskNumber = task.taskNumber

        $('#bounty-info-project').append(task.cardName);
        $('#bounty-info-name').append(task.taskDesc);
        $('#bounty-info-tasknumber').append(taskNumber);   
        $('#bounty-info-desc').append(task.cardDesc);
        $('#bounty-info-admin').append(task.admin);
        $('#bounty-info-worktype').append(workType);
        $('#bounty-info-reward').append(task.rewardDash + ' Dash ($' + task.rewardUSD + ')');
        $('#trello-instructions').prepend(`To request to reserve this ${workType} Task, add this comment on the trello card :<br>`);
        $('#rules-explanation').append(`I want to reserve ${workType} Task #${taskNumber}`)
        var trellolink = task.cardUrl;      
        $('#bounty-info-trellolink').append('<a id="reserve-button" class="btn" href="' + trellolink + '">RESERVE BOUNTY</a>');
        let strInfoLink = bountyDetailInfo(workType);
        $('#rules-link').append(strInfoLink);
        let encodedLink = encodeURIComponent(window.location.href);
        console.log('encoded link', encodedLink);

        let twitterText = 'Claim bounty rewards for helping to build Dash blockchain software - check out this task:';
        
        let encodedText = encodeURIComponent(twitterText);
        encodedText = twitterText.replace("%20", "%2520");
        let twitterUrl = `https://twitter.com/intent/tweet?url=${encodedLink}&text=${encodedText}`;
        let twitterButton = `<a class="twitter-share-button"
    href="${twitterUrl}">Tweet</a>`
        $('#tweet-button').append(twitterButton);
        }
        
        else {
            $('#bounty-details').append(`<p>Sorry, this bounty id couldn't be found. It may already be reserved. Check the main bounties page for other opportunities</p>`);
            $('#page-share').prepend(`<p>Find other opportunities to share with friends on the bounties page</p>`)
        }
        }
        catch(e){
                $('#loading-data').css("background-color","red");
                $('#loading-data').text(`There was an error loading the data: ${e}`);
                $('#loading-data').show();
        }
    })




</script>

<h1>Bounty Details</h1>
<div id='page-share' class="page_share">
<div class="fb-share-button" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
<div id="tweet-button"></div>
</div>
<br>
<div id="bounty-details"></div>

<div id="concept-info">
<h3>Get rewards for your ideas!</h3>
Learn more about <a href="rules.html#31-concepts">creating concepts</a>
</div>

<div id="loading-data" style="display:none;">Loading data...</div>
