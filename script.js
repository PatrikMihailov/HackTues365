function Calculate()
{
  var height = parseFloat(document.getElementById("height").value);
  var weight = parseFloat(document.getElementById("weight").value);
  var age = parseFloat(document.getElementById("age").value);
  var gender = document.getElementById("gender");
  var BMI = (weight)/((height/100)*(height/100));
  var cal;
  switch (gender) {
    case "male":
      cal = 10*weight+6.25*height-5*age+5;
      break;
    case "female":
      cal = 10*weight+6.25*height-5*age-161;
      break;

  }
  print_bmi(BMI);
  change();

}
function print_bmi(BMI){
  document.getElementById("bmi").innerHTML = BMI;
}

function hide_second() {
  document.getElementById("second").style.display = "hide";
}

function change() {
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
}
