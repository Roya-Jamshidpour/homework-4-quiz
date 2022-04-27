
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
let questionContainerElement = document.getElementById('question-container');
let shuffledQuestions, currentQuestionIndex
let questionElement = document.querySelector('.intro');
let answerButtonsElement = document.getElementById('answer-buttons');
let intro = document.querySelector(".intro");
var answered;

// index to be filled each time a new question is loaded

// when start button is clicked quiz begins and time also
startButton.addEventListener('click', startGame)

let timer;
let timerCount = 60;
let score = []


// The init function is called when the page loads 
function init() {
    questionContainerElement.classList.add('hide')
}

// The startGame function is called when the start button is clicked
function startGame() {
    intro.classList.add('hide')
    startButton.classList.add('hide')
   // introElement.classList.add('hide')
    timerCount = 60;
    questionContainerElement.classList.remove('hide')
    // questionsContainer = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
  //  document.getElementById('intro').style.display = "none";
    showNextQuestion()
    // Starts timer
    startTimer()
    console.log('started')

    load_question(currentQuestionIndex);

}

function load_question(currentQuestionIndex) {
    document.getElementById("question-text").innerHTML = quiz[currentQuestionIndex]["question"]
    document.getElementById("option-1").innerHTML = quiz[currentQuestionIndex]["choices"][0]
    document.getElementById("option-2").innerHTML = quiz[currentQuestionIndex]["choices"][1]
    document.getElementById("option-3").innerHTML = quiz[currentQuestionIndex]["choices"][2]
    document.getElementById("option-4").innerHTML = quiz[currentQuestionIndex]["choices"][3]
    answer_question() 

}

function showNextQuestion(question) {
    questionElement.innerText = question
    question.answer.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answers.text
        button.classList.add('btn')
        answerButtonsElement.innerText = answers.text
    })
    

}
// questions and answers index
let quiz = [
    
    { 
        question: 'What is 2 + 2?',
        choices: ['5', '4', '6', '3'],
        answer: '4'
    },
           
    {
        question: 'What is 1+1?',
        choices: ['2', '3', '6', '4'],
        answer: '2'
    },

    {
        question: 'What is 5+5?',
        choices: ['3', '12', '13', '10'],
        answer: '10'
    },

    {
        question: 'What is 20 x 2?',
        choices: ['30', '50', '40', '60'],
        answer: '40'
    }
]

function answer_question (event) {
answered = event.target.innnerHTML;

if (answered === quiz[currentQuestionIndex]["answer"]) {
    timerCount += 10
} else {
    timerCount -= 10
}
currentQuestionIndex += 1
}


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