let playAgainButton = document.getElementById('big-button');


function init() {
    displayNewHighScore()
}

function displayNewHighScore() {
    let lastScore = JSON.parse(localStorage.getItem('highScore'));

}


playAgainButton.addEventListener('click', playAgain)

function playAgain() {
    window.location.href = "./index.html";
}


let highScores = document.getElementById('high-scores-list');
let highScoresArray = JSON.parse(localStorage.getItem('newScore')) || [];


