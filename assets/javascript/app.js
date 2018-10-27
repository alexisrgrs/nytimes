// jQuery variables
var $term = $("#term");
var $records = $("#records");
var $start = $("#start");
var $end = $("#end");
var $search = $("#search");
var $clear = $("#clear");
var $articles = $("#articles");

var apikey = "244ce6d25dc544d2b9ef69153389dd56";
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

// get the value of search, records, start, and end fields
$search.on("click", function() {
    var term = $term.val();
    var records = $records.val();
    var start = $start.val();
    var end = $end.val();

    console.log($term.val());
    //console.log("search");
    var newUrl = url + "?q=" + term;
    if (start !== "") {
        newUrl = newUrl + "&begin_date=" + start;
    }

    if (end !== "") {
        newUrl = newUrl + "&end_date=" + end;
    }
    
    newUrl = newUrl + "&api-key=" + apikey;
    
    $.ajax({
        url: newUrl,
        method: "GET"
    })
        .then(function(response) {
        console.log(response.response.docs)
        var $snippet = $("<h1>").text(response.response.docs[0].snippet);

        var $articleUrl = $("<p>").text(response.response.docs[0].web_url);
        $articles.append($snippet, $articleUrl);

        

    })

});



// make an api call based off those values
// make an element with the api value
// append that to the article section
// clear the values of search, records, start, and end fields
// 