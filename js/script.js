const GRADIENT = ['#a8fff9','#1aff1a', '#99ff33', '#d2ff4d','#ffff80','#ffff4d','#ffdb4d','#','#ffcc00','#ff6600','#ff0000'];

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
  color_change((100*BMI)/40);

}

var total_calories=0;

function Cals(arg) {
  debugger
  switch(arg){
    case "cola":
      total_calories+=parseInt(document.getElementById(arg).value);
      break;
    case "coffee":
      total_calories+=parseInt(document.getElementById(arg).value);
      break;
    case "button3":
      total_calories+=parseInt(document.getElementById(arg).value);
      break;
    }
}


function print_bmi(BMI){
  document.getElementById("bmi").innerHTML = BMI;
}
function print_cal(cal){
  document.getElementById("cal").innerHTML = cal;
}
 function print_som(elem, to_insert) {
   document.getElementById(elem).innerHTML = to_insert;
 }

 function change_som(to_hide, to_show) {
     document.getElementById(to_hide).style.display = "none";
     document.getElementById(to_show).style.display = "block";
 }

function color_change(percent){
  var colour = GRADIENT[Math.floor((percent/100)*GRADIENT.length)]; //puska stoinosti ot 0-9, pravi se za indeksi na bar-a i tei
  document.getElementById("bar").style.width = percent + '%';
  document.getElementById("bar").style.backgroundColor = colour;
}
 //var sum = 0;
 //var temp = 0;

///function sum_cals(id){
//    temp =  parseNumber(document.getElementById(id).value);
  //  sum = sum+temp;
//}

function circle_Progress_Bar()
{
  var container = document.getElementById("container");
  var bar = new ProgressBar.Circle('#container', {
    color: 'red',
    strokeWidth: 5,
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#ff6347', width: 4 },
    to: { color: '#aa0000', width: 4 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 2000);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '3.5rem';

  bar.animate(1);
}
