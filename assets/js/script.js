// Global Variables
var startButton = document.querySelector("#start-button");
var timer = document.querySelector(".timer");
var score = document.querySelector("#score");
var secRemaining = document.querySelector(".sec-remaining").textContent;
var questionEl = document.querySelector("#question");
var index = 0;
var displayAnswerEl = document.querySelector("#display-answer");
var answerButtonEl = document.querySelectorAll(".answer-button");

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
        secRemaining--;
        $("#countdown span").text(secRemaining);
        console.log(secRemaining);
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




    // // Creating answer element to display
    // var answer = document.createElement("p");
    // displayAnswerEl.appendChild(answer);

    // // DISPLAY NEW ELEMENT FOR X AMOUNR OF TIME
    // setTimeout(function () {
    //     p.style.display = 'none';
    // }, 1000);




// Listen for answer button click
answerButtonEl.forEach(button => {
    button.addEventListener('click', checkAnswers);
});



// Check Answers Function
function checkAnswers(event) {
    console.log(questions[index].correctAnswer);
    console.log(parseInt(event.target.value) + 1);

    // Check if answer is correct or wrong
    if (parseInt(questions[index].correctAnswer) === parseInt(event.target.value) + 1) {
        displayAnswerEl.textContent = "Correct!";
    } 
    else if (parseInt(questions[index].correctAnswer) !== parseInt(event.target.value) + 1) {
        secRemaining = secRemaining - 10;
        displayAnswerEl.textContent = "Wrong!";
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
startButton.addEventListener("click", startQuiz);