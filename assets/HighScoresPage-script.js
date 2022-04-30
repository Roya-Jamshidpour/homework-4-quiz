let playAgainButton = document.getElementById('big-button');
// when button is clicked back to startiing page
playAgainButton.addEventListener('click', playAgain)
var lastScore = localStorage.getItem("highScore");

function init() {
    displayNewHighScore()
}

function displayNewHighScore() {
    console.log(lastScore)
    

    
//     document.getElementById("saved-name").innerHTML = lastScore;
//   document.getElementById("saved-score").innerHTML = score;

}

// function to go back to start page
function playAgain() {
    window.location.href = "./index.html";
}




