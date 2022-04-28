
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
let quizStartText = document.querySelector(".large-font")
let introText = document.getElementById('intro-text')
let questionContainerElement = document.getElementById('question-container')
let questionElement = document.querySelector('.intro');

// index to be filled each time a new question is loaded

// when start button is clicked quiz begins and time also
startButton.addEventListener('click', startGame)

let timer;
let timerCount = 60;
let score = []
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

choiceBtn1.addEventListener('click', answer_question);
choiceBtn1.addEventListener('click', answer_question);
choiceBtn2.addEventListener('click', answer_question);
choiceBtn3.addEventListener('click', answer_question);

// The init function is called when the page loads 
function init() {
    questionContainerElement.classList.add('hide')
}

// The startGame function is called when the start button is clicked
function startGame() {
    introText.classList.add('hide')
    startButton.classList.add('hide')
    quizStartText.classList.add('hide')
    // introElement.classList.add('hide')
    timerCount = 60;
    questionContainerElement.classList.remove('hide')
    showNextQuestion(quiz)
    // Starts timer!!!!!!!!
    //startTimer()
    console.log('started');
    load_question(currentQuestionIndex);

}

// displays question above choices boxes
function showNextQuestion(quiz) {
    let setQuestion = quiz[currentQuestionIndex];
    quiz.forEach(question => console.log(question));
    document.getElementById('question_text').innerHTML = setQuestion.question;
    // displays answer choices in buttons
    let setChoices = setQuestion.answer;
    quiz.forEach(choices => console.log(choices));

}

function load_question() {
    document.getElementById("question_text").innerHTML = quiz[currentQuestionIndex]["question"]
    console.log(quiz[currentQuestionIndex]["question"])
    document.getElementById("option-1").innerHTML = quiz[currentQuestionIndex]["choices"][0]
    document.getElementById("option-2").innerHTML = quiz[currentQuestionIndex]["choices"][1]
    document.getElementById("option-3").innerHTML = quiz[currentQuestionIndex]["choices"][2]
    document.getElementById("option-4").innerHTML = quiz[currentQuestionIndex]["choices"][3]
    answer_question()

}

function answer_question(quiz) {
    if (value === quiz[currentQuestionIndex].answer);

        questionsIndex++;
        if (questionsIndex < questions.length) {
            showQuestion();
        }
        else {
            countdown -= 10;

        }
    }


    // function answer_question(event) {
    //     answered = event.target.innnerHTML;

    //     if (answered === quiz[currentQuestionIndex]["answer"]) {
    //         timerCount += 10
    //     } else {
    //         timerCount -= 10
    //     }
    //     currentQuestionIndex += 1
    // }

    // checks if the answer is correct or not
    // function answer_question() {
    // 	if (this.value === quiz[currentQuestionIndex].correctAnswer) {
    // 		currentQuestionIndex++;
    // 		if (currentQuestionIndex < question.length) {
    // 			showNextQuestion();
    // 		}
    // 	} else {
    // 		timerCount -= 10;
    // 	}
    // }

    // These functions are used by init
    // function getPoints() {
    //     // Get stored value from client storage, if it exists
    //     var storedPoints = localStorage.getItem("winCount");
    //     // If stored value doesn't exist, set counter to 0
    //     if (storedWins === null) {
    //         winCounter = 0;
    //     } else {
    //         // If a value is retrieved from client storage set the winCounter to that value
    //         winCounter = storedWins;
    //     }
    //     //Render win count to page
    //     win.textContent = winCounter;
    // }

    // Calls init() so that it fires when page opened
    init();

