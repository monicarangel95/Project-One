// create click events for the buttons
// link the api data into the functions for the click event
// get the functions ans ajax calls into html and get it on the page
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=1%20large%20apple",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "edamam-edamam-nutrition-analysis.p.rapidapi.com",
		"x-rapidapi-key": "3c8fa9a58bmshe064770bc740defp11927fjsn403e47f60d59"
	}
}
 var queryUrl= "https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=1%20large%20apple" + "&apikey=trilogy";
var APIKey = "3c8fa9a58bmshe064770bc740defp11927fjsn403e47f60d59"
 $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(response) {
    $("b1").click(function(){
        $.get("settings", function(data, status){
            $("#b1").html(data);
            
        })
        
       
       });

  });
  $.ajax(settings).done(function (response) {
	console.log(response);
});
var = 