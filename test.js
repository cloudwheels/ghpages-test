 $(document).ready(function () {

var items = ['cat','dog','biscuit'];
var i;
for (i = 0; i < items.length; i++) {
  $('#content').append(items[i] + '<br>');
}

}
