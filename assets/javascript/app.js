// jQuery variables
var $term = $("#term");
var $records = $("#records");
var $start = $("#start");
var $end = $("#end");
var $search = $("#search");
var $clear = $("#clear");
var $articles = $("#articles");

// get the value of search, records, start, and end fields
$search.on("click", function() {
    $term.val()
    $records.val()
    $start.val()
    $end.val()
})

// make an api call based off those values
// make an element with the api value
// append that to the article section
// clear the values of search, records, start, and end fields
// 