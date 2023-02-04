class Game {
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
const animals = new Game()

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

// let player1start = false
// let player2start = false

cards.forEach(card => {
    card.addEventListener('click', ()=>{
        onclicked(event)
    })
})

//player1 button
function p1play(e){
    e.preventDefault()  
    alert('Welcome to my memory game!')
    animals.bgmusic.play()
    animals.startaudio.play()
    animals.seconds = 120   
   
   const interval = setInterval(()=>{
       timer.innerHTML = animals.seconds --
       
       if(matches === 10){
        clearInterval(interval)
    }
       if(animals.seconds < 0){
       clearInterval(interval)
      setTimeout(() => {
        animals.gamoversound.play()
        animals.stopMusic()
        alert('You lost!')
       }, 500);
       }
    }, 1000);
    if(matches === 10){
        clearInterval(interval)
    }
}
 p1btn.addEventListener('click', p1play)

 const images = [
    'cat',
    'chicken',
    'cow',
    'duck',
    'elephant',
    'horse',
    'tiger',
    'parrot',
    'pig',
    'dog'
]
console.log(cards)

//to get ramdom images of card
for(let image of images){
    console.log(image)
const cardAIndex = parseInt(Math.random()* cards.length)
    const cardA = cards[cardAIndex]
    console.log(cardA)
    cards.splice(cardAIndex, 1)
    cardA.className += ` ${image}`
    cardA.setAttribute('data-image', image)
const cardBIndex = parseInt(Math.random()* cards.length)
    console.log(cardBIndex)
    const cardB = cards[cardBIndex]
    console.log(cardB)
    console.log(cards.splice(cardBIndex, 1))
    console.log(cardB.className += ` ${image}`)
    cardB.setAttribute('data-image', image)
    
}

let clickedCard = null
let preventClick = false
let matches = 0

//a function to click the cards
function onclicked(e){
    animals.clickaudio.play()   
    const target = e.currentTarget
    movescount.innerHTML = animals.flips ++
    if(target === clickedCard || target.className.includes('done')){
        return
    }
    target.className = target.className.replace('img-hidden', '').trim()
    console.log(target.className)
    console.log(target.getAttribute('data-image'))
   target.className += ' done'
    //if we havent clicked a card, keep track of the card, display it’s img
     if(!clickedCard){
       console.log(clickedCard = target)
     }else if(clickedCard){
         //if we have already clicked a card, check if the new card matches the old card
        if(clickedCard.getAttribute('data-image') !== target.getAttribute('data-image')){
           preventClick = true
           setTimeout(() => {
            clickedCard.className = clickedCard.className.replace('done', '').trim() + ' img-hidden'
            target.className = target.className.replace('done', '').trim() + ' img-hidden'
            clickedCard = null
            preventClick = false
           }, 400);
            console.log(target.getAttribute('data-image'))
            console.log(clickedCard.getAttribute('data-image'))
            console.log('cards are  not equal')
        }else{
            console.log(target.getAttribute('data-image'))
            console.log(clickedCard.getAttribute('data-image'))
            console.log('cards are equal')
            animals.mathchsound.play()
            clickedCard.className = clickedCard.className.replace('done', '').trim() + ' match'
            target.className = target.className.replace('done', '').trim() + ' match'
            matches++
            console.log(matches)
            clickedCard = null
            if(matches === 10){                       
                setTimeout(() => {
                    animals.stopMusic()
                    alert("Thank you for playing the game!")
                   
                    // location.reload()
                }, 3000);
                animals.winsound.play()
                
            }
        }
    }
}

//a function for a reset button
function resetGame(){
    animals.startaudio.play()
    animals.stopMusic()
    totaltime.innerHTML = `Time: <span>60</span>`
    location.reload()
    }
 resetbtn.addEventListener('click', resetGame)

 //created a two player scoreboard
 const player1Score = document.getElementById("score1");
 const player2Score = document.getElementById("score2");
 const add1Btn = document.getElementById("add1");
 const add2Btn = document.getElementById("add2");
 add1Btn.addEventListener("click", function() {
   player1Score.textContent = parseInt(player1Score.textContent) + 1;
 });
 add2Btn.addEventListener("click", function() {
   player2Score.textContent = parseInt(player2Score.textContent) + 1;
 });