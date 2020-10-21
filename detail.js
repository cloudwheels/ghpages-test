$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    return decodeURI(results[1]) || 0;
}

$(document).ready(function () {
    $('#bounty-info-name').append(decodeURIComponent($.urlParam('bountyname')))
    $('#bounty-info-project').append(decodeURIComponent($.urlParam('bountycardname')))
    $('#bounty-info-desc').append(decodeURIComponent($.urlParam('bountycarddesc')))
    $('#bounty-info-admin').append(decodeURIComponent($.urlParam('bountyadmin')))
    $('#bounty-info-worktype').append(decodeURIComponent($.urlParam('bountyworktype')))
    $('#bounty-info-reward').append(decodeURIComponent($.urlParam('bountyrewarddash'))+'Dash ($'+ decodeURIComponent($.urlParam('bountyrewardusd')))
    var trellolink = decodeURIComponent($.urlParam('bountytrellourl'));
    $('#bounty-info-trellolink').append('<a class="btn" href="' + trellolink + '">RESERVE BOUNTY</a>')

})
