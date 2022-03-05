// Global Variables
var startButton = document.querySelector("#start-button");
var timer = document.querySelector(".timer");
var score = document.querySelector("#score");
var secRemaining = document.querySelector(".sec-remaining").textContent;
var questionEl = document.querySelector("#question");
var index = 0;
var displayAnswerEl = document.querySelector("#display-answer");
var answerButtonEl = document.querySelectorAll(".answer-button");
var submitScoreButtonEl = document.querySelector("#submit-score");
var initialsInput = document.querySelector("#initials");

var buttonA = document.querySelector("#answer-a");
var buttonB = document.querySelector("#answer-b");
var buttonC = document.querySelector("#answer-c");
var buttonD = document.querySelector("#answer-d");





// Array of Questions 
var questions = [ 
    {
        question: "Commonly used data types DO Not include:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "3"
    },
    {
        question: "The condition in an if / else statement is enclosed within _______.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "2"
    },
    {
        question: "Arrays in Javascript can be used to store ______.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "4"
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "3"
    },
    {
        question: "A very helpful tool used during development and debugging is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "4"
    }
];








// Start Quiz Function
function startQuiz () {
    startTimer();
    switchScreen1();
    startQuestions();
}


// Start Timer Function
function startTimer () {
    var timerInterval = setInterval(function () {
        if (secRemaining > 0  && index !== questions.length) {
            secRemaining--;
            $("#countdown span").text(secRemaining);
        }
    }, 1000);
}


// Switch Screen Function (1)
function switchScreen1 () {
    $("#start-screen").addClass("d-none");
    $("#quiz-screen").removeClass("d-none");
}


// Start Questions Function
function startQuestions () {
    if (index < questions.length) {
        questionEl.textContent = questions[index].question;
        buttonA.textContent = questions[index].answers[0];
        buttonB.textContent = questions[index].answers[1];
        buttonC.textContent = questions[index].answers[2];
        buttonD.textContent = questions[index].answers[3]; 
    }
}


// Listen for answer button click
answerButtonEl.forEach(button => {
    button.addEventListener('click', checkAnswers);
});


// Check Answers Function
function checkAnswers(event) {

    // Check if answer is correct or wrong & display result on screen for 1 second
    if (parseInt(questions[index].correctAnswer) === parseInt(event.target.value) + 1) {
        displayAnswerEl.textContent = "Correct!";
        $("#display-answer").show();
        setTimeout(function() {
            $("#display-answer").hide();
        }, 1000);
    } 
    else if (parseInt(questions[index].correctAnswer) !== parseInt(event.target.value) + 1) {
        secRemaining = secRemaining - 10;
        displayAnswerEl.textContent = "Wrong!";
        $("#display-answer").show();
        setTimeout(function() {
            $("#display-answer").hide();
        }, 1000);
    }

    // Ask next question (if we are not already at the last question)
    if (index < questions.length) {
        index++;
    }
    startQuestions(index);

    if (index === questions.length) {
        switchScreen2();
    }
}


// Switch Screen Function (2)
function switchScreen2 () {
    $("#quiz-screen").addClass("d-none");
    $("#end-screen").removeClass("d-none");

    // Display final time as final score on End Screen
    $("#score").text(secRemaining);
}


// on click of submit button, run switch screen function 3
submitScoreButtonEl.addEventListener('click', switchScreen3);


// Create new high score variable
var newHighScore = secRemaining;


// Switch Screen Function (3)
function switchScreen3 () {
    $("#end-screen").addClass("d-none");
    $("#high-score-screen").removeClass("d-none");
}


// Take input initials & final score, and put them into a High Scores list on High Scores Screen

initialsInput
newHighScore





















// Fire Start Quiz Function when start button is clicked
startButton.addEventListener("click", startQuiz);