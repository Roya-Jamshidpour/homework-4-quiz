let playAgainButton = document.getElementById('big-button');


function init() {
    displayNewHighScore()
}

function displayNewHighScore() {
    window.localStorage.getItem('newScore');
}


playAgainButton.addEventListener('click', playAgain)

function playAgain() {
    window.location.href = "./index.html";
}




