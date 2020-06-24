var firebaseController = (function () {

	var config = {
		apiKey: "AIzaSyDZqUrt1oVCfjy2S2r_zqtksplkJohuFRQ",
		authDomain: "recipe-73632.firebaseapp.com",
		databaseURL: "https://recipe-73632.firebaseio.com",
		projectId: "recipe-73632",
		storageBucket: "recipe-73632.appspot.com",
		messagingSenderId: "971938382693",
		appId: "1:971938382693:web:0ccd51f9b3fcba7e88d78c",
		measurementId: "G-R2MJPLV90T"
	};
	firebase.initializeApp(config);
	var database = firebase.database();

	return {
		storeSearchParamsFirebase: function (inputChoices) {
			//Push to database
			database.ref("users/").push(inputChoices);
		},
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