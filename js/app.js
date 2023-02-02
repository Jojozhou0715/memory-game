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

