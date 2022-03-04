// Global Variables
var startButton = document.querySelector("#start-button");
var timer = document.querySelector(".timer");
var score = document.querySelector("#score");
var secRemaining = document.querySelector(".sec-remaining");
var questionNumber = questions[i];

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








// ********************************************

// Start Quiz Function
function startQuiz() {
    startTimer();
    questionNumber = 0;
    askQuestion(questionNumber);
}

// Start Timer Function
function startTimer() {
    var timerInterval = setInterval(function () {
        $(".countdown .sec-remaining").text(sec--);

        if (secRemaining === 0 || questionNumber === questions.length) {
            clearInterval(timerInterval);
         
            score.textContent = secRemaining;
        }
    }, 1000);



{/* <script>
var sec = 15
var timer = setInterval(function() {
   $('.auctiondiv .countdown').text(sec--);
   if (sec == -1) {
      $('.auctiondiv .countdown').fadeOut('slow');
      clearInterval(timer);
   }
}, 1000);
</script> */}


    


// SET QUESTION FUNCTION
function askQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        ans1Btn.textContent = questions[id].answers[0];
        ans2Btn.textContent = questions[id].answers[1];
        ans3Btn.textContent = questions[id].answers[2];
        ans4Btn.textContent = questions[id].answers[3];
    }
}











// *********************************************************

// Fire Start Quiz Function when start button is clicked
startButton.addEventListener("click", startTimer);