// MAIN APP CONTROLLER
var foodSearch = (function() {
    
    var searchParams, recipeInfoArray, numOfRecipes;

    function setUpEventListeners() {
        var DOM = UIController.getDOMStrings();

        disclaimerModalController.addModalEventListeners();

        $(DOM.searchBtn).on("click", validateUserInput);

        $(DOM.startBtn).on("click", UIController.displaySearchPage);

        $(DOM.searchAgainBtn).on("click", UIController.displaySearchPage);

        $(DOM.closeModal).on("click", function() {
			UIController.hideModal(this);
        });
    }

    function processRestaurantList(restaurantArray) {
        if (restaurantArray.length > 0) {
            UIController.createRestaurantCards(restaurantArray);
        } else {
            UIController.displayNoZomatoResults();
        }
    }
    
    function performZomatoSearch(cityid) {
        APIController.zomatoSearch(processRestaurantList, cityid, searchParams.cuisine, searchParams.diet, searchParams.mealType);
    }

    function processRecipeInfo(recipeInfo) {
        recipeInfoArray.push(recipeInfo);
        if (recipeInfoArray.length === numOfRecipes) {
            UIController.createRecipeCards(recipeInfoArray);
        }
    }

    function getRecipeInfo(arr) {
        if (arr.length > 0) {
            numOfRecipes = arr.length;
            for (var i = 0; i < arr.length; i++) {
                APIController.spoonacularGetRecipeInfo(processRecipeInfo, arr[i]);
            }
        } else {
            UIController.displayNoSpoonacularResults();
        }
    }

    function performFoodSearch(cityid) {
        if (cityid) {

            Controller.storeSearchParamsLocal(searchParams);
 

            UIController.displaySearchResults();
 
			recipeInfoArray = [];
			APIController.zomatoGetCityNumber(performZomatoSearch, searchParams.city);
            APIController.spoonacularGetRecipeIDs(getRecipeInfo, searchParams.cuisine, searchParams.intolerances, searchParams.mealType, searchParams.diet);
		
        } else {
            var DOM = UIController.getDOMStrings();

            UIController.showModal(DOM.alertCity);
        }        
    }

    function validateUserInput() {

        if (UIController.checkUserInput()) { 

            searchParams = UIController.getUserInput();  
       
            APIController.zomatoGetCityNumber(performFoodSearch, searchParams.city);
		}
    };

    return {
        init: function() {
            UIController.displayMainPage();
            setUpEventListeners();
        }
    }
})();
function onAPIControllerLoaded() {
    generalFunctions.loadScript("./assets/js/Module.js", foodSearch.init);
}

function onControllerLoaded() {
    generalFunctions.loadScript("./assets/js/index.js", onAPIControllerLoaded);
}

function onControllerAppLoaded() {
    generalFunctions.loadScript("./assets/js/local.js", onControllerLoaded);
}

function onjQueryLoaded() {
    generalFunctions.loadScript("./assets/js/input.js", onControllerAppLoaded);
}

function loadAllScripts() {
    generalFunctions.loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", onjQueryLoaded);
}

window.addEventListener("load", loadAllScripts);