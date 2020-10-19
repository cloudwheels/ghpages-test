 $(document).ready(function () {

var items = ['2-system','3-work','4-admins'];
var i;
for (i = 0; i < items.length; i++) {
  $('#content').append('<a href="./rules.html#' + items[i] + '">'+items[i]+'</a><br>');
}
  
  // example url for the to spec list https://api.trello.com/1/list/5f6f3b68348cca07137c4d3b/cards?key=910955be8cf85efce2eb715fea302f2b
var service = 'https://api.trello.com/1/';
var key = '910955be8cf85efce2eb715fea302f2b';
var listId_toSpec = '5f6f3b68348cca07137c4d3b';
var listId_tendering = '5f6f3b6a6f0b1b801b2f89b2';

$.ajax(
                {
                    type: "GET",
                    url: service + 'list/' + listId_toSpec + '/cards?key=' + '910955be8cf85efce2eb715fea302f2b',
                    data: "{}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    cache: false,
                    success: function (data) {

                        console.log('Got toSpec data:');
                        console.dir(data);

                        //filter to only get those with green labels

                        //let hasLabels = data.filter(item => item.hasOwnProperty('labels'));
                        //let filtered = hasLabels.filter(item => item.labels[0].color == 'green');
                        
                        //console.log('Filtered data:');
                        //console.dir(filtered);

                        $('#bounties-tospec').append(
                            $.map(data, function (item, index) {
                                return '<tr><td><a href="./bounty-detail.html?bountytrellourl=' + item.shortUrl + '&bountyname=' + item.name + '&bountyrewardusd=50"><div class="left-column">' + item.name + '</div></a></td><td><div>USD $50</div></td></tr>';
                            }).join());
                    },

                    error: function (msg) {

                        alert(msg.responseText);
                    }
                });

});
