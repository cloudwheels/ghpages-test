$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    return decodeURI(results[1]) || 0;
}

$(document).ready(function () {

    var workType = decodeURIComponent($.urlParam('bountyworktype'));

    $('#bounty-info-name').append(decodeURIComponent($.urlParam('bountyname')))
    $('#bounty-info-project').append(decodeURIComponent($.urlParam('bountycardname')))
    $('#bounty-info-desc').append(decodeURIComponent($.urlParam('bountycarddesc')))
    $('#bounty-info-admin').append(decodeURIComponent($.urlParam('bountyadmin')))
    $('#bounty-info-worktype').append(workType)
    $('#bounty-info-reward').append(decodeURIComponent($.urlParam('bountyrewarddash')) + ' Dash ($' + decodeURIComponent($.urlParam('bountyrewardusd')) + ')')
    var trellolink = decodeURIComponent($.urlParam('bountytrellourl'));
    $('#bounty-info-trellolink').append('<a class="btn" href="' + trellolink + '">RESERVE BOUNTY</a>')

    //chnage link to rules depending on worktype
    let reservingAnchor = '2-2-1-reserving-a-task';
    let rulesAnchor = '';
    let linkText = '<a href="rules.html">Find out more about tasks</a>';
    switch (workType.toUpperCase()) {
        case 'SPEC':
            rulesAnchor = '3-2-specifications';
            linkText = `<a href="rules.html#${rulesAnchor}">creating specifications.</a>`;
            break;
        case 'PROJECT':
            rulesAnchor = '3-3-projects';
            linkText = `<a href="rules.html#${rulesAnchor}">and completing project tasks.</a>`;
            break;
        case 'SERVICE':
            rulesAnchor = '3-4-services';
            linkText = `<a href="rules.html#${rulesAnchor}">and completing service tasks.</a>`;
            break;
        case 'JOB':
            rulesAnchor = '3-5-jobs';
            linkText = `<a href="rules.html#${rulesAnchor}">and completing job tasks.</a>`;
            break;
        case 'QA':
            rulesAnchor = '3-6-qa';
            linkText = `<a href="rules.html#${rulesAnchor}">and completing QA tasks.</a>`;
            break;


    }

    let strInfoLink = `Find out more about <a href="rules.html#${reservingAnchor}">reserving tasks</a> and ${linkText}`
    $('#rules-link').append(strInfoLink);

})
