$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    return decodeURI(results[1]) || 0;
}

$(document).ready(function () {
    $('#bounty-info-name').append(decodeURIComponent($.urlParam('bountyname')))
    $('#bounty-info-reward').append(decodeURIComponent($.urlParam('bountyrewardusd')))
    var trellolink = decodeURIComponent($.urlParam('bountytrellourl'));
    $('#bounty-info-trellolink').append('<a href="' + trellolink + '">' + trellolink + '</a>')

})
