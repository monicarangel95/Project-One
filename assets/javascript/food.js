var foodSearch = (function () {
    var searchParams;
    function setUpEventListeners() {
        var DOM = UIController.getDOMStrings();
        disclaimerModalController.addModalEventListeners();
        $(DOM.searchBtn).on("click", validateUserInput);
        $(DOM.startBtn).on("click", UIController.displaySearchPage);
        $(DOM.searchAgainBtn).on("click", UIController.displaySearchPage);
        $(DOM.closeModal).on("click", function () {
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
        APIController.zomatoSearch(
            processRestaurantList,
            cityid,
            searchParams.cuisine,
            searchParams.diet,
            searchParams.mealType
        );
    }
    function performFoodSearch(cityid) {
        if (cityid) {
            firebaseController.storeSearchParamsLocal(searchParams);
            firebaseController.storeSearchParamsFirebase(searchParams);

            UIController.displaySearchResults();
            APIController.zomatoGetCityNumber(performZomatoSearch, searchParams.city);
            (

                searchParams.cuisine,
                searchParams.intolerances,
                searchParams.mealType,
                searchParams.diet
            );
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
    }
    return {
        init: function () {
            UIController.displayMainPage();
            setUpEventListeners();
        },
    };
})();
function onAPIControllerLoaded() {
    generalFunctions.loadScript("./assets/javascript/module.js", foodSearch.init);
}
function onFirebaseControllerLoaded() {
    generalFunctions.loadScript(
        "./assets/javascript/apis.js",
        onAPIControllerLoaded
    );
}
function onFirebaseAppLoaded() {
    generalFunctions.loadScript(
        "./assets/javascript/firebase.js",
        onFirebaseControllerLoaded
    );
}
function onUIControllerLoaded() {
    generalFunctions.loadScript(
        "https://www.gstatic.com/firebasejs/7.15.4/firebase.js",
        onFirebaseAppLoaded
    );
}
function onjQueryLoaded() {
    generalFunctions.loadScript(
        "./assets/javascript/UserInt.js",
        onUIControllerLoaded
    );
}
function loadAllScripts() {
    generalFunctions.loadScript(
        "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
        onjQueryLoaded
    );
}
window.addEventListener("load", loadAllScripts);
