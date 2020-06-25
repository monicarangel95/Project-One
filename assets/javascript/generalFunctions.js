function main() {
    disclaimerModalController.addModalEventListeners();
}

function onUIControllerLoaded() {
    generalFunctions.loadScript("./assets/javascript/module.js", main);
}

function onjQueryLoaded() {
    generalFunctions.loadScript("./assets/javascript/UserInt.js", onUIControllerLoaded);
}

function loadAllScripts() {
    generalFunctions.loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", onjQueryLoaded);
}

window.addEventListener("load", loadAllScripts);