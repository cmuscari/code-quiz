// Global Variables
var startButton = document.querySelector("#start-button");
var timer = document.querySelector(".timer");
var score = document.querySelector("#score");
var secRemaining = document.querySelector(".sec-remaining").textContent;
// var questionNumber = questions[i];

// Array of Questions 
var questions = [ 
    {
        question: "Commonly used data types DO Not include:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "2"
    },
    {
        question: "The condition in an if / else statement is enclosed within _______.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "1"
    },
    {
        question: "Arrays in Javascript can be used to store ______.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "3"
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "2"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "3"
    }
];




// Start Timer Function
function startTimer () {
    var timerInterval = setInterval(function () {
        secRemaining--;
        $("#countdown span").text(secRemaining);
        console.log(secRemaining);
    }, 1000);
}







// function startTimer() {
//     var timerInterval = setInterval(function () {
//         var sec = 60;
//         $(".countdown .sec-remaining").text = (sec--);
//         console.log(sec);

//         if (sec === 0 || questionNumber === questions.length) {
//             clearInterval(timerInterval);
         
//             score.textContent = sec;
//         }
//     }, 1000);
// }




// *********************************************************
// Fire Start Quiz Function when start button is clicked
startButton.addEventListener("click", startTimer);