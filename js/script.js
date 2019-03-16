function change() {
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
}

function Calculate()
{
  var height = parseFloat(document.getElementById("height").value);
  var weight = parseFloat(document.getElementById("weight").value);
  var age = parseFloat(document.getElementById("age").value);
  var gender = document.getElementById("gender").value;
  var BMI = (weight)/((height/100)*(height/100));
  var cal;
  debugger
  switch (gender) {
    case "2":
      cal = (13.75*weight)+(5*height)-(6.76*age)+66;
      break;
    case "1":
      cal = (9.56*weight)+(1.85*height)-(4.68*age)+655;
      break;

  }
  print_bmi(BMI.toFixed(1));
  print_cal(cal);
  change();

}
function print_bmi(BMI){
  document.getElementById("bmi").innerHTML = BMI;
}
function print_cal(cal){
  document.getElementById("cal").innerHTML = cal;
}
