 (function () {
  $.ajax({
     method: "GET",
     url: "https://www.googleapis.com/youtube/v3/search",
     data: {
       key: "AIzaSyCccWlhsEqQsX1Zcil0_oBkj5Kbh7GE0P0",
       q: "search term",
       part: "snippet",
       maxResults: 4,
       type: "video",
       videoEmbeddable: true,
    },
   })
     .done((data) => {
       console.log(data);
     })
     .catch((err) => {
       console.log(err);
     });
 });

 $(function () {
   $("form").on("submit", function (e) {
     e.preventDefault();
     //
     var request = gapi.client.youtube.search.list({
       part: "snippet",
       type: "video",
q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
       maxResults: 4,
       order: "viewCount",
       publishedAfter: "2017-01-01T00:00:002",
     });
     //call the function
     request.execute(function (response) {});
   });
 });
 function init() {
   gapi.client.setApiKey("9AIzaSyCccWlhsEqQsX1Zcil0_oBkj5Kbh7GE0P0");
   gapi.client.load("youtube", "v3", function () {
     //is it ready???
   });
 }

$(document).ready(function () {
  $("#searchBtn").click(function () {
    var searchTerm = $("#searchId").val().trim();
    console.log("searchTerm" + searchTerm);
    var queryURL = "https://youtube-search1.p.rapidapi.com/" + searchTerm;
    console.log(queryURL);
    var settings = {
      async: true,
      crossDomain: true,
      url: queryURL,
      method: "GET",
      headers: {
        "x-rapidapi-host": "youtube-search1.p.rapidapi.com",
        "x-rapidapi-key": "97883d25d3msh08049d8c0ca7622p1a4f4bjsn6c1df87c7352",
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response.items);
      // changing number of results
      for (var i = 0; i < 5; i++) {
        var newdiv = $("<div>");
        newdiv.append(
          "<div class= 'title'>" + response.items[i].title + "</div>"
        );
        newdiv.append(
          "<p class='video'> Watch the Video Here!:<a href=" +
            response.items[i].url +
            "target='_blank'> " +
            response.items[i].url +
            "</a></p>"
        );
        newdiv.append("<img src=" + response.items[i].thumbHigh + "/>");
        $("#results").append(newdiv);
      }
    });
  });
});

 $(document).ready(function () {
   var settingsDiet = {
     async: true,
     crossDomain: true,
     url:
       "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/images/analyze?imageUrl=https%253A%252F%252Fspoonacular.com%252FrecipeImages%252F635350-240x150.jpg",
     method: "GET",
     headers: {
       "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
       "x-rapidapi-key": "97883d25d3msh08049d8c0ca7622p1a4f4bjsn6c1df87c7352",
     },
   };
   $.ajax(settingsDiet).done(function (response) {
     console.log(response);
   });
 });