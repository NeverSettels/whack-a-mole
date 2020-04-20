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
let clickableListener = (game) => {
  const whack = new Audio('https://freesound.org/data/previews/436/436163_1992856-lq.mp3')

  $(".hill").on('click', '.clickable', () => {
    whack.play()
    game.score++
    $('#score').text(game.score)
  })
}
let addMole = () => {
  const music = new Audio('https://freesound.org/data/previews/369/369920_2402876-lq.mp3')
  const victory = new Audio('https://freesound.org/data/previews/470/470083_3248005-lq.mp3')
  music.play();
  victory.pause();
  music.loop = true
  let molePicker = setInterval(() => {
    let randNumb = Math.floor(Math.random() * (9) + 1)
    $(".hill").empty();
    $(`#mole-${randNumb}`).html(`<img class="clickable" src="https://cdn.mathisexterminating.com/uploads/2019/12/pest-mole.png"
    alt="mole">`);
  }, 1000);
  setTimeout(() => {
    music.pause()
    victory.play()
    clearInterval(molePicker)
  }, 31000);
}
$(document).ready(() => {
  $("#start").click(() => {
    let game = { score: 0 }
    startGameTimer();
    addMole()
    clickableListener(game);
  })

}); 