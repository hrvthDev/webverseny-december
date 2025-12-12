let music = document.getElementById("music");
let musicBtn = document.getElementById("music-toggle");
let isPlayed = false;


function playMusic(){
musicBtn.addEventListener("click", () => {
    if (!isPlayed) {
        music.play();
        isPlayed = true;
    } else {
        music.pause();
        isPlayed = false;
    }
});
}


playMusic();