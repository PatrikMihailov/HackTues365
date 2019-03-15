var height = Number(document.getElementById("height").value);
var weight = Number(document.getElementById("weight").value);
var age = Number(document.getElementById("age").value);
var gender = document.getElementById("gender").value;


var BMI = weight/(height/100)*(height/100);
var cal;
switch (gender) {
  case "male":
    cal = 10*weight+6.25*height-5*age+5;
    break;
  case "female":
    cal = 10*weight+6.25*height-5*age-161;
    break;
}

function print_bmi(){
  document.getElementById("bmi").innerHTML = BMI;
}

function hide_second() {
  document.getElementById("second").style.display = "none";
}

function change() {
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
}
