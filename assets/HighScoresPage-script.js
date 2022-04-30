let playAgainButton = document.getElementById('big-button');

// when button is clicked back to startiing page
playAgainButton.addEventListener('click', playAgain)

// gets name and score from local storage


function init() {
    displayNewHighScore()
}
 var lastScore = JSON.parse(localStorage.getItem('newScore'));

// renders new score with initials on page
function displayNewHighScore() {
   

     document.getElementById("saved-name").textContent = "Name: " + lastScore[0].name;
    //  I cannot get score to render but it is stored locally 
     document.getElementById("saved-score").textContent = "Score: " + lastScore[1].score;

}

// function to go back to start page
function playAgain() {
    window.location.href = "./index.html";
}

init()


