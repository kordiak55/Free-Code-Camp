

$(document).ready(function() {
    console.log('something');
    
    $("#display-result").append("testing");
    
    
    
      $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json",
        data: {
          action: "query",
          list: "search",
          srsearch: $("input[name=Wikipedia]").val(),
          format: "json"
        },
        dataType: "jsonp",
        success: processResult
      });
  });
  
  function processResult(apiResult) {
    for (var i = 0; i < apiResult.query.search.length; i++) {
      $("#display-result").append(
        "<p>" + apiResult.query.search[i].title + "</p>"
      );
    console.log("made it");  
    }
  }
  