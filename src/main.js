import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(() => {
  $("#start").click(() => {
    let timer = 30
    $('#time').removeClass('red')
    let timerFunction = setInterval(() => {
      if (timer < 0) {
        timer = 30;
        clearInterval(timerFunction);
        $("#time").text("Times Up!")
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