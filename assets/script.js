
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
let questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
let questionElement = document.querySelector('.intro')
let answerButtonsElement = document.getElementById('answer-buttons')
let introQuestion = document.querySelector(".intro")

// index to be filled each time a new question is loaded

// when start button is clicked quiz begins and time also
startButton.addEventListener('click', startGame)

let timer;
let timerCount = 60;
let score = []


// The init function is called when the page loads 
function init() {
    getHighScore()
}

// The startGame function is called when the start button is clicked
function startGame() {
    startButton.classList.add('hide')
   // introElement.classList.add('hide')
    timerCount = 60;
    questionContainerElement.classList.remove('hide')
    questionsContainer = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    showNextQuestion()
    // Starts timer
    startTimer()
    console.log('started')
}

function showNextQuestion(question) {
    questionElement.innerText = question
    question.answer.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answers.text
        button.classList.add('btn')
    })
    answerButtonsElement.innerText = answers.text

}
// questions and answers
let question = [
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '7', correct: false },
            { text: '8', correct: false },
            { text: '10', correct: false }
        ]
    },
    {
        question: 'what is 1+1?',
        answers: [
            { text: '5', correct: false },
            { text: '4', correct: false },
            { text: '2', correct: true },
            { text: '9', correct: false }
        ]
    }
]




// Updates point count on screen and sets win count to client storage
function getHighScore() {
    win.textContent = winCounter;
    localStorage.setItem("score", getPoints);
}

// These functions are used by init
function getPoints() {
    // Get stored value from client storage, if it exists
    var storedPoints = localStorage.getItem("winCount");
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