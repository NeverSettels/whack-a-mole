import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(() => {
  $("#start").click(() => {
    let timer = 30
    let timerFunction = setInterval(() => {
      if (timer < 0) {
        timer = 30;
        clearInterval(timerFunction);
      } else {
        $("#time").text(timer)
        timer--
      }
      if (timer <= 10) {
        $('#time').addClass('red')
      }
    }, 1000);
  })

}); 