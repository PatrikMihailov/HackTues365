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
