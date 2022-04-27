
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
let questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
let questionElement = document.getElementById('question')
let answerButtonsElement = document.getElementById('answer-buttons')


// when start button is clicked quiz begins and time also
startButton.addEventListener('click', startGame)

var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];

// The init function is called when the page loads 
function init() {
    getWins();
    getlosses();
}

// The startGame function is called when the start button is clicked
function startGame() {
    startButton.classList.add('hide')
    timerCount = 60;
    questionContainerElement.classList.remove('hide')
    questionsContainer = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
    // Starts timer
    startTimer()
    console.log('started')
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionButtonsElement.innerText = question.question

}

let questions = [
    {
        question: 'what is 2 + 2',
        answters: [
            { text: '4', correct: true },
            { text: '7', correct: false}
        ]
    }
]



// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
      

// Updates win count on screen and sets win count to client storage
function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
}

// These functions are used by init
function getWins() {
    // Get stored value from client storage, if it exists
    var storedWins = localStorage.getItem("winCount");
    // If stored value doesn't exist, set counter to 0
    if (storedWins === null) {
        winCounter = 0;
    } else {
        // If a value is retrieved from client storage set the winCounter to that value
        winCounter = storedWins;
    }
    //Render win count to page
    win.textContent = winCounter;
}

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
    // Resets win and loss counts
    winCounter = 0;
    // Renders win and loss counts and sets them into client storage
    setWins()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);