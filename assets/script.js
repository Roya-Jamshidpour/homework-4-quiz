
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
let quizStartText = document.querySelector(".large-font");
let introText = document.getElementById('intro-text');
let questionContainerElement = document.getElementById('question-container');
let questionElement = document.querySelector('.intro');
let submitButton = document.getElementById('submit-button');

// when start button is clicked quiz begins and time also
startButton.addEventListener('click', startGame);
submitButton.addEventListener('click', storeHighScore);

let highScoresArray = JSON.parse(localStorage.getItem('highScoresArray')) || [];

let timer;
let timerCount = 60;
let highScore = []
currentQuestionIndex = 0

// quiz questions and answers
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

// buttons with choices for what to answer question with
let choiceBtn1 = document.getElementById('option-1');
let choiceBtn2 = document.getElementById('option-2');
let choiceBtn3 = document.getElementById('option-3');
let choiceBtn4 = document.getElementById('option-4');

// when a button is clicked then the function to see if it is correct or not is called
choiceBtn1.addEventListener('click', answer_question);
choiceBtn2.addEventListener('click', answer_question);
choiceBtn3.addEventListener('click', answer_question);
choiceBtn4.addEventListener('click', answer_question);

// The init function is called when the page loads 
function init() {
    questionContainerElement.classList.add('hide')
    document.getElementById('initials-field').classList.add('hide')
}

// The startGame function is called when the start button is clicked
function startGame() {
    introText.classList.add('hide')
    startButton.classList.add('hide')
    quizStartText.classList.add('hide')
    // introElement.classList.add('hide')
    timerCount = 60;
    questionContainerElement.classList.remove('hide')
    showNextQuestion()
    // Starts timer!
    startTimer()
    console.log('started');
}

// function to start timer count
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        //   when list of questions is thru game ends
        if (timerCount <= 0 || currentQuestionIndex >= quiz.length) {
            clearInterval(timer)
            endGame();
            //   when timer count reaches 0 game ends
            if (timerCount <= 0)
                clearInterval(timer)
            endGame();

        }
    }, 1000);
}

// displays question above choices boxes
function showNextQuestion() {
    let setQuestion = quiz[currentQuestionIndex];

    document.getElementById('question_text').innerHTML = setQuestion.question;

    // displays answer choices in buttons
    document.getElementById("option-1").textContent = quiz[currentQuestionIndex]["choices"][0]
    document.getElementById("option-2").textContent = quiz[currentQuestionIndex]["choices"][1]
    document.getElementById("option-3").textContent = quiz[currentQuestionIndex]["choices"][2]
    document.getElementById("option-4").textContent = quiz[currentQuestionIndex]["choices"][3]
}

// function to decide if user answer is correct or incorrect
function answer_question() {
    if (this.textContent === quiz[currentQuestionIndex].answer) {
        currentQuestionIndex++;
        alert("Correct!")
        if (currentQuestionIndex < quiz.length) {

            showNextQuestion();
        }
        // if incorrect answer given then 10sec deducted from timeCount
    } else {
        alert("Incorrect, try again!");
        timerCount -= 10;

    }
}

// allows initials field and submit button to pop up 
function endGame(timerCount) {
    console.log("end")
    questionContainerElement.classList.add('hide');
    document.getElementById('initials-field').classList.remove('hide')
}

function storeHighScore(event) {
    event.preventDefault();
    // Stringify and set key in localStorage to highScore array
    let initials = document.getElementById('initials').value;
    highScore = {
		name: initials,
		score: timerCount,
	};
    
    highScoresArray.push(highScore)
    localStorage.setItem('newScore', JSON.stringify(highScoresArray));
    console.log(highScoresArray)
    goToHighScoresPage()

    
     // go to High Scores page
     function goToHighScoresPage() {
   window.location.href= "./HighScoresPage.html";
   

}
}


// so init function fires when page opens
init()