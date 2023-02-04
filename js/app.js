class game {
    constructor(){
        this.moves = 0;
        this.seconds = 100;
        this.flips = 1;
        this.bgmusic = new Audio('/Users/joeyzhou/Desktop/seirfx-eustoma/projects/project1/sounds/Run-Amok.mp3');
        this.clickaudio = new Audio('/Users/joeyzhou/Desktop/seirfx-eustoma/projects/project1/sounds/video-game-mystery-alert.wav');
        this.startaudio = new Audio('/Users/joeyzhou/Desktop/seirfx-eustoma/projects/project1/sounds/mixkit-game-click-1114 (1).wav');
        this.mathchsound = new Audio('/Users/joeyzhou/Desktop/seirfx-eustoma/projects/project1/sounds/mixkit-arcade-mechanical-bling-210.wav');
        this.gamoversound = new Audio('/Users/joeyzhou/Desktop/seirfx-eustoma/projects/project1/sounds/mixkit-sad-game-over-trombone-471.wav');
        this.winsound = new Audio('/Users/joeyzhou/Desktop/seirfx-eustoma/projects/project1/sounds/mixkit-animated-small-group-applause-523.wav');
        this.bgmusic.volume = 0.2;
        this.bgmusic.loop = true;
    }
    stopMusic(){
        this.bgmusic.pause();
        this.bgmusic.currentTime = 0;
    }
    score(){
        this.moves ++
    }
}
const animals = new game()

const p1btn = document.querySelector('#player1')
const p2btn = document.querySelector('#player2')
const stopbtn  = document.querySelector('#stop')
const resetbtn = document.querySelector('#reset')
const totaltime = document.getElementById('time')
const movescount = document.querySelector('#movecount')
const timer = document.querySelector('#second')
const fistflip = document.querySelector('#p1flip')
const secondflip = document.querySelector('#p2flip')
const firstscore = document.querySelector('#score1')
const secondscore = document.querySelector('#score2')
const cards = [...document.querySelectorAll('.card')]

let player1start = false
let player2start = false

cards.forEach(card => {
    card.addEventListener('click', ()=>{
        onclicked(event)
    })
})

//player1 button
function p1play(e){
    e.preventDefault() 
    player1start = true
    player2start = false
    alert('Welcome to my memory game!')
    let playersName = prompt("Enter player's name to play!")
    document.querySelector('#name').innerHTML = playersName
    // firstscore.innerHTML = `<span>${animals.flips++}</span>`
    animals.bgmusic.play()
    animals.startaudio.play()
    animals.seconds = 100   
   const interval = setInterval(()=>{
       timer.innerHTML = animals.seconds --
       if(matches === 10){
        clearInterval(interval)
    }
       if(animals.seconds < 0){
       clearInterval(interval)
    //    animals.seconds = 0
    //    animals.flips = 0
      setTimeout(() => {
        animals.gamoversound.play()
        animals.stopMusic()
        alert('You lost!')
        // alert("It's next player's turn!")
        // location.reload()
       }, 500);
       }
    }, 1000);
    if(matches === 10){
        clearInterval(interval)
    }
}
 p1btn.addEventListener('click', p1play)
