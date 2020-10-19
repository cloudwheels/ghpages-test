 $(document).ready(function () {

var items = ['2-system','3-work','4-admin'];
var i;
for (i = 0; i < items.length; i++) {
  $('#content').append('<a href="./rules.html#' + items[i] + '">'+items[i]+'</a>');
}

});
