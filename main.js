document.body.addEventListener('keyup',(event) =>
{
    playSound(event.code.toLowerCase());
});
document.querySelector('.composer button').addEventListener('click', () =>{
    let songCreated = document.querySelector('#input').value;

    if(songCreated !== ''){
       let songArray = songCreated.split('');
       playComposition(songArray);
    }
});

const playSound = (sound) => {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add('active')

        setTimeout(()=>{
            keyElement.classList.remove('active')
        }, 300)
    }
};

const playComposition = (song) => {
    let wait = 0;

    for(let songItem of song) {
        setTimeout(()=>{
            playSound(`key${songItem}`);
        },wait)
        wait += 250;
        
    }
}