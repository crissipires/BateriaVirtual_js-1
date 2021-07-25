function keyClick(key) {
  let clickedKey = key.target.getAttribute("data-key");
  playSound(clickedKey);
}

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if (keyElement) {
    keyElement.classList.add("active");

    setTimeout(() => {
      keyElement.classList.remove("active");
    }, 300);
  }
}

function playComposition(song) {
  let wait = 0;

  for (let songItem of song) {
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, wait);
    wait += 250;
  }
}

export {keyClick, playSound , playComposition};