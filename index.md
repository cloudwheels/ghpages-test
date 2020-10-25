<script>
        $(document).ready(async function () {
        console.log('board id index', boardId);
        let data = await getTrelloAllData();
        let lists = transformTrelloData(data);
        //parse data to html tables & display
        $('#list_project').append(listToTable('project', 'Project', lists.project));
        $('#list_spec').append(listToTable('spec', 'Specification', lists.spec));
        $('#list_service').append(listToTable('service', 'Service', lists.service));
        $('#list_job').append(listToTable('job', 'Job', lists.job));
        $('#list_qa').append(listToTable('qa', 'QA', lists.qa));

});
</script>

## Get rewards for your ideas
<div id="concept-info">
Find out more about <a href="rules.html#31-concepts">creating concepts</a>
</div>
<br>
# Available Bounties

## PROJECT BOUNTIES

<div id="list_project"></div>

## SPECIFICATION BOUNTIES

<div id="list_spec"></div>

## SERVICE BOUNTIES

<div id="list_service"></div>

## JOB BOUNTIES

<div id="list_job"></div>

## QA BOUNTIES

<div id="list_qa"></div>
