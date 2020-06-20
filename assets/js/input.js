var UIController = (function () {

    var DOMStrings = {
        restaurantList: '#restaurant_accordion',
        cuisineGroup: '#cuisine_tags',
        recipeList: '#recipe_accordion',
        ingredientList: '#ingredient_list',
        listItemClass: 'list-group-item',
        searchBtn: '#search',
        welcomeDiv: '.wrapper',
        mainForm: '.dietaryReq',
        searchResults: '.results',
        logoutBtn: '#logout',
        startBtn: '.started',
        infoBtn: '#info',
        modal: '.modal',
        disclaimer: '#disclaimer',
        closeDisclaimer: '#closeDisclaimer',
        closeModal: '.closeModal',
        searchAgainBtn: '#searchAgain',
        submitInfoBtn: '.submit'
    }

    return {
        getDOMStrings: function() {
            return DOMStrings;
        },
        displayMainPage: function() {
            $(DOMStrings.mainForm).hide();
            $(DOMStrings.searchResults).hide();
            $(DOMStrings.searchAgainBtn).hide();
        },
        displaySearchPage: function() {
            $(DOMStrings.welcomeDiv).hide();
            $(DOMStrings.searchResults).hide();
            $(DOMStrings.searchAgainBtn).hide();
            $(DOMStrings.mainForm).show();
        },
        displaySearchResults: function() {
            $(DOMStrings.mainForm).hide();
            $(DOMStrings.searchResults).show();
            $(DOMStrings.searchAgainBtn).show();
            $(DOMStrings.restaurantList).empty();
            $(DOMStrings.recipeList).empty();
        },
        checkUserInput: function() {
            var inputValidated = false;
            if ($("input:radio[name='mealtime']").is(":checked") === false) {
                this.showModal(DOMStrings.alertMeal);
            } else if ($("input:radio[name='diet']").is(":checked") === false) {
                this.showModal(DOMStrings.alertDiet);
            }else if ($("input:radio[name='cuisine']").is(":checked") === false) {
                this.showModal(DOMStrings.alertCuisine);
            } else if (document.querySelector("#city").value.trim() === "") {
                this.showModal(DOMStrings.alertCity);
            } else {
                inputValidated = true;
            }
            return inputValidated;
        },
        getUserInput: function() {
            var mealtime = $('input[name="mealtime"]:checked').val();
            var intolerances = [];
            $('input[name="intolerance"]:checked').each(function() {
                intolerances.push($(this).val());
            });
            if (!intolerances) {
                intolerances = "";
            }
            var diet = $('input[name="diet"]:checked').val();
            var cuisine = $('input[name="cuisine"]:checked').val();
            var city = $('input[name="city"]').val();
        
            return {
                city: city,
                cuisine: cuisine,
                diet: diet,
                mealType: mealtime,
                intolerances: intolerances
            };
        },

        createRestaurantCards: function(restArr) {
            for (var i = 0; i < restArr.length; i++) {
                var resto = restArr[i];
                var tagString = '';

                var html = '<div class="card"><div class="card-header" id="restoHeading' + i + '"><button class="btn btn-link" data-toggle="collapse" data-target="#restoCollapse' + i + '" aria-expanded="true" aria-controls="restoCollapse' + i + '"><h4 class="mb-0">' + resto.name + '</h4></button></div><div id="restoCollapse' + i + '" class="collapse" aria-labelledby="restoHeading' + i + '" data-parent="#restaurant_accordion"><div class="card-body"><h5 class="card-title">Location</h5><p class="card-text">' + resto.address + '</p><p><a href="' + resto.url + '" target="_blank">Click to see restaurant on zomato.com</a></p></div><div class="card-deck"><div class="card border-0"><div class="card-body"><h5 class="card-title">Rating: ' + resto.userScore + '</h5></div></div><div class="card mr-3 border-0"><div class="card-body"><h5 class="card-title">Avg. Cost for Two: ' + resto.avgCost + '</h5></div></div></div><div class="card border-0"><div class="card-body"><p class="card-text text-center tags" id="cuisine_tags' + i + '"></p></div></div></div></div>';

                $(DOMStrings.restaurantList).append(html);

                for (let j = 0; j < resto.cuisines.length; j++) {

                    tagString += ' ' + resto.cuisines[j];
                    if (j < resto.cuisines.length - 1) {
                        tagString += ' |';
                    }
                }

                $(DOMStrings.cuisineGroup + i).text(tagString);
            }
        },
        createRecipeCards: function(recipeArr) {
            for (var i = 0; i < recipeArr.length; i++) {
                var recipe = recipeArr[i];
                if (!recipe.instructions) {
                    recipe.instructions = 'See instructions on spoonacular.com';
                }
                var html = '<div class="card"><div class="card-header" id="recipeHeading' + i + '"><button class="btn btn-link" data-toggle="collapse" data-target="#recipeCollapse' + i + '" aria-expanded="true" aria-controls="recipeCollapse' + i + '"><h4 class="mb-0 text-center">' + recipe.title + '</h4></button></div><div id="recipeCollapse' + i + '" class="collapse" aria-labelledby="recipeHeading' + i + '" data-parent="#recipe_accordion"><div class="card-body"><img class="card-img ml-auto" src="' + recipe.image + '" alt="Image of recipe dish"><h5 class="card-title">Prep Time: ' + recipe.prepTime + '</h5><h5 class="card-title"></h5><p class="card-text">' + recipe.instructions + '</p><p><a href="' + recipe.url + '">Click to see recipe on spoonacular.com</a></p></div><div class="card-deck"><div class="card ml-3 border-0"><div class="card-body"><h5 class="card-title">Ingredients</h5><ul class="list-group" id="ingredient_list' + i + '"></ul></div></div><div class="card mr-3 border-0"><div class="card-body"><h5 class="card-title">Nutrients</h5><ul class="list-group"><li class="list-group-item">Fat: ' + recipe.fat + '</li><li class="list-group-item">Calories: ' + recipe.cals + '</li><li class="list-group-item">Protein: ' + recipe.protein + '</li></ul></div></div></div></div></div>';

                $(DOMStrings.recipeList).append(html);

                for (var j = 0; j < recipe.ingredients.length; j++) {
                    $('<li>').addClass(DOMStrings.listItemClass)
                        .text(recipe.ingredients[j])
                        .appendTo(DOMStrings.ingredientList + i);
                }
            }
        },
        showModal: function(selector) {
            $(selector).closest(DOMStrings.modal).toggleClass("show").css("display", "block");
        },
        hideModal: function(selector) {
            $(selector).closest(DOMstrings.modal).toggleClass("show").css("display", "none");
        }
    }
})();