$.(document).readyfunction()) {
    var settings = {
      async: true,
      crossDomain: true,
      url: "https://youtube-search1.p.rapidapi.com/the%2520beatles",
      method: "GET",
      headers: {
        "x-rapidapi-host": "youtube-search1.p.rapidapi.com",
        "x-rapidapi-key": "97883d25d3msh08049d8c0ca7622p1a4f4bjsn6c1df87c7352",
      },
    };
  
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  });
$.(document).ready(function(){
    var api_url ="https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=1%20large%20apple"
    var key = "3c8fa9a58bmshe064770bc740defp11927fjsn403e47f60d59"
});

$( ".content a").each(function( index, element){
    console.log($(this).text();)

$.ajax({
    url: api_url + "?key=" + key + "&q=" + $(this).text(),
    contentType: "application/json",
    dataType: 'JSON',
    success: function(result){
        console.log(result);
    }
})
});
});
  

$.ajax({
    url: 'https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=1%20large%20apple',
    type: 'GET' // this is default, but worth pointing out
  }).done(function(data){
    // you may use "data" to access the underlying data
  }
  function(){
      document.onclick(returnData)

  }









// //   API URL's:
// Food Calorie Data Search :
//  https://rapidapi.com/kenpi04/api/food-calorie-data-search
// Recipes 
// https://api2.bigoven.com/https://rapidapi.com/edamam/api/edamam-nutrition-analysis
// https://www.themealdb.com/api.php 


