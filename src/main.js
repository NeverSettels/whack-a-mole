import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


let startGameTimer = () => {
  let timer = 30
  $('#time').removeClass('red')
  let timerFunction = setInterval(() => {
    if (timer < 0) {
      timer = 30;
      clearInterval(timerFunction);
      $("#time").text("Times Up!")
      $(".hill").off("click")
    } else {
      $("#time").text(timer)
      timer--
    }
    if (timer <= 10) {
      $('#time').addClass('red')
    }
  }, 1000);
}
// let checkNum = (number, toCheck) => {
//   if (toCheck === number) {
//     console.log("equal! ", toCheck)
//     let temp = Math.floor(Math.random() * (9) + 1)
//     checkNum(number, temp)
//   } else {
//     console.log("not equal! ", toCheck)
//     return toCheck;
//   }
// }
let clickableListener = () => {
  const whack = new Audio('https://freesound.org/data/previews/125/125266_2219481-lq.mp3')

  $(".hill").on('click', '.clickable', () => {
    whack.play()
    console.log('whack')
  })
}

let addMole = () => {
  let molePicker = setInterval(() => {
    let randNumb = Math.floor(Math.random() * (9) + 1)
    $(".hill").empty();
    $(`#mole-${randNumb}`).html(`<img class="clickable" src="https://cdn.mathisexterminating.com/uploads/2019/12/pest-mole.png"
    alt="mole">`);
  }, 1000);
  setTimeout(() => {
    clearInterval(molePicker)
  }, 30000);
}
$(document).ready(() => {

  $("#start").click(() => {
    startGameTimer();
    addMole()
    clickableListener();
  })

}); 