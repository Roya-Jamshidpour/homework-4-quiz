let playAgainButton = document.getElementById('big-button');

// when button is clicked back to startiing page
playAgainButton.addEventListener('click', playAgain)

// gets name and score from local storage


function init() {
    displayNewHighScore()
}

// renders new score with initials on page
function displayNewHighScore() {
    var lastScore = JSON.parse(localStorage.getItem('newScore'));
    document.getElementById("saved-name").innerHTML = lastScore.name;
    document.getElementById("saved-score").innerHTML = lastScore.score;

}

// function to go back to start page
function playAgain() {
    window.location.href = "./index.html";
}




