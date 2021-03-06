//DATE
Date.shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
Date.prototype.formatted = function(){
  return this.getDate()+' '+Date.shortMonths[this.getMonth()]+' '+this.getFullYear();
};

//STRING
String.prototype.toDate = function(){
  var d = new Date();
  d.setTime(Date.parse(this));
  return d;
};

String.prototype.truncate = function(to_length){
  if(to_length >= this.length)return this;
  return this.substring(0, to_length-3)+'...';
};

function googleNewsFeed(query){
  return "http://news.google.de/news?pz=1&cf=all&ned=de&hl=de&cf=all&output=rss&q="+query.replace(' ','+')
}

function fillWithFeedEntries(selector, query){
  google.load("feeds", "1");

  $(function(){
    var source = googleNewsFeed(query)
    var items = 3;
    var feed = new google.feeds.Feed(source);
    feed.load(function(result) {
      if (result.error){console.log(result.error)};
      var $feed = $(selector);
      for (var i = 0; i <= items; i++) {
        var entry = result.feed.entries[i];
        var $content = $(entry.content)
        $feed.append(
          '<tr>' +
            '<td>' +
            $content.find('td font')[0].innerHTML +
            '</td>' +
            '<td>' +
            $content.find('div')[1].innerHTML +
            '</td>' +
            '</tr>'
          );
      }
    });
  });
}

$(function() {
  $( ".datepicker" ).datepicker({dateFormat: 'yy-mm-dd'});
})
