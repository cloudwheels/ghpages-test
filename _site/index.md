<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="./app.js"></script>


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

 <div class="nav-container">
                <div class="top-nav"><a href="index.html" class="top-nav-border">Bounties</a><a href="rules.html#" class="top-nav-border">Rewards</a><a
                        href="rules.html">Rules</a></div>
                <div class="nav-corner">
                    <a href="https://github.com/dashincubator" target="_blank"><img src="assets/image/github-logo-white.png" 
                            alt="Dash Incubator on GitHub"></a><a href="https://twitter.com/dashincubator" target="_blank"><img
                            src="assets/image/twitter.svg" alt="Dash Incubator on Twitter"></a>
                    <a href="http://chat.dashdevs.org" target="_blank"><img src="assets/image/discord.svg" alt="Chat on the Dash Dev Discord"></a>
                </div>
                <a href="./"><img class="nav-logo" src="assets/image/logo.png" alt="incubator logo"></a>
            </div>

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
