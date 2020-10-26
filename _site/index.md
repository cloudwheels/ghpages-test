<script>
        
        $(document).ready(async function () {
        //console.log('board id index', boardId);
        $('#loading-data').show();
        
        try{
        let data = await getTrelloAllData();
        $('#loading-data').hide();
        let lists = transformTrelloData(data);
        //parse data to html tables & display
        $('#list_project').append(listToTable('project', 'Project', lists.project));
        $('#list_spec').append(listToTable('spec', 'Specification', lists.spec));
        $('#list_service').append(listToTable('service', 'Service', lists.service));
        $('#list_job').append(listToTable('job', 'Job', lists.job));
        $('#list_qa').append(listToTable('qa', 'QA', lists.qa));
        }
        catch(e){
                $('#loading-data').css("background-color","red");
                $('#loading-data').text(`There was an error loading the data: ${e}`);
                $('#loading-data').show();
        }

});
</script>
<p>Dash Incubator is an open-source blockchain-funded app that distributes Dash proposal rewards to anyone who can provide open-source output that adds value to Dash. The  focus is creating useful Dapps and scaling the Platform ecosystem.
</p>
<p>
The fund’s aim is to provide a fully incentivized work system that’s easy to use so anyone can earn Dash for contributing valuable output, both for Dash Incubator and as a model / system anyone else can ‘white label’ into their own fund within the Dash ecosystem.
</p>

<div id="bounty-header">
<h1>BOUNTIES</h1>
</div>


## CONCEPTS
<div id="concept-info">
<h3>Get rewards for your ideas!</h3>
Learn more about <a href="rules.html#31-concepts">creating concepts</a>
</div>
<div id="loading-data" style="display:none;">Loading data...</div>

## PROJECTS

<div id="list_project"></div>

## SPECIFICATIONS

<div id="list_spec"></div>

## SERVICES

<div id="list_service"></div>

## JOBS

<div id="list_job"></div>

## QA

<div id="list_qa"></div>
