// Create Welcome Screen with start button
// Display questions
// check answer given
// deduct score if wrong
// Show next question
// end quiz when finished questions or timer is zero
// Allow user to save Initials and score
// Show saved scores
// Go back to start page


var score = document.getElementById("timer");
var pageContent = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var timer = 0
var startBtnEl = document.getElementById("startBtn");
var answerEl = document.getElementById("answers");

var scoreBar = function() {    
    var timeDisplay = document.createElement("span");
    timeDisplay.textContent = (timer);
    score.appendChild(timeDisplay);
}

//Quiz Questions

var questions = [
    {
        title: "Question 1: Boolean variables can only be which 2 values?",
        option1: "Yes or No",
        option2: "True or False",
        option3: "1 or 0",
        option4: "Coke or Pepsi",
        answer: "True or False"
    },
    {
        title: "Question 2: The condition of an if statement is enclosed within?",
        option1: "Curly Brackets {}",
        option2: "Square Brackets []",
        option3: "Parentheses ()",
        option4: "Quotes ''",
        answer: "Parentheses ()"
    },
    {
        title: "Question 3: Which type of tag is used for JavaScript?",
        option1: "link",
        option2: "span",
        option3: "div",
        option4: "script",
        answer: "script"
    },
    {
        title: "Question 4: The logical operator for 'and' is?",
        option1: "&&",
        option2: "||",
        option3: "===",
        option4: ">=",
        answer: "&&"
    },
    {
        title: "Question 5: Using the plain Math.random() function will produce a random number between 0 and?",
        option1: "100",
        option2: "1000",
        option3: "1",
        option4: "Infinity",
        answer: "1"
    }
];


var startQuiz = function() {
    console.log("started");
    for (i=0; i<questions.length; i++) {
        questionEl.innerHTML = questions[i].title;
        var options = document.createElement("button");
        options.textContent = questions[i].option1;
        answerEl.appendChild(options);
        console.log(options);
    }
}
var checkTimer = function() {    
    
};


startBtnEl.addEventListener("click", startQuiz);
scoreBar();


