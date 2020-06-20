function main() {
    disclaimerModalController.addModalEventListeners();
}
function onjQueryLoaded() {
    generalFunctions.loadScript("./assets/js/input.js", main);
}

function loadAllScripts() {
    generalFunctions.loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", onjQueryLoaded);
}

window.addEventListener("load", loadAllScripts);