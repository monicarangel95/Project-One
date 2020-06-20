
var local = (function () {

	return {

		storeSearchParamsLocal: function (inputChoices) {
			//Local Storage
			localStorage.setItem("meal", inputChoices.mealType);
			localStorage.setItem("intolerance", inputChoices.intolerance);
			localStorage.setItem("diet", inputChoices.diet);
			localStorage.setItem("cuisine", inputChoices.cuisine);
			localStorage.setItem("city", inputChoices.city);
		}
	};
})();