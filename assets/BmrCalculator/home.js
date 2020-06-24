function calcBMR(){
    var weight = parseFloat(document.bmrform.weight.value);
    //var weight = document.getElementById('weight').value;
    var height = parseFloat(document.bmrform.height.value);
    //var height = document.getElementById('height').value;
    var age = parseInt(document.bmrform.age.value);
    //var age = document.getElementById('weight').value;
    var bmr = 66.47 + (13.75 * weight) + (5.003 * height) -(6.755 * age); 
    document.bmrform.bmr.value = Math.round(bmr*100)/100.0;
    //document.getElementById('bmr').value = bmr;
    
}