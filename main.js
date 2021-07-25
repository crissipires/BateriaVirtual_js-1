import {keyClick, playSound , playComposition} from './js/functions.js'

document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLowerCase());
});

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', keyClick);
})

document.querySelector(".composer button").addEventListener("click", () => {
  let songCreated = document.querySelector("#input").value.toLowerCase();

  if (songCreated !== "") {
    let songArray = songCreated.split("");
    playComposition(songArray);
  }
});
