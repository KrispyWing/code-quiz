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
var titleEl = document.getElementById("title");
var questionBoxEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var startBtnEl = document.getElementById("startBtn");
var scoreEL = document.getElementById("score-page");
var highScoreEl = document.getElementById("high-scores");
var scoreListEl = document.getElementById("score-list");
var nameInput = document.getElementById("name");
var finalScore = document.getElementById("score");
var ans1 = document.getElementById("a1");
var ans2 = document.getElementById("a2");
var ans3 = document.getElementById("a3");
var ans4 = document.getElementById("a4");
var resultEL = document.getElementById("result");
var submitScoreBtn = document.getElementById("submit-score");
var restartBtn = document.getElementById("restart");
var highScoreBtn = document.getElementById("view-scores")
var questionCount = 0;
var timer = 60;
var scoresList = [];

var scoreBar = function() {    
    var timeDisplay = document.createElement("span");
    timeDisplay.textContent = (timer);
    score.appendChild(timeDisplay);
}

//Quiz Questions

var questions = [
    {
        question: "Question 1: Boolean variables can only be which 2 values?",
        options: ["Yes or No", "True or False", "1 or 0", "Coke or Pepsi"],
        answer: "1"
    },
    {
        question: "Question 2: The condition of an if statement is enclosed within?",
        options: ["Curly Brackets {}", "Square Brackets []", "Parentheses ()", "Quotes ''"],
        answer: "2"
    },
    {
        question: "Question 3: Which type of tag is used for JavaScript?",
        options: ["link", "span", "div", "script"],
        answer: "3"
    },
    {
        question: "Question 4: The logical operator for 'and' is?",
        options: ["&&", "||", "===", ">="],
        answer: "0"
    },
    {
        question: "Question 5: Using the plain Math.random() function will produce a random number between 0 and?",
        options: ["100", "1000", "1", "Infinity"],
        answer: "2"
    }
];

var setTime = function() {
    var timeInterval = setInterval(function() {
       timer--;
       score.textContent = timer;
       
       if (timer === 0 || questionCount === questions.length) {
           clearInterval(timeInterval);
           questionBoxEl.style.display = "none";
           scoreEL.style.display ="block";
           finalScore.textContent = timer;           
       }
    }, 1000);
}


var startQuiz = function() {
    titleEl.style.display = "none"
    questionBoxEl.style.display = "block"
    questionCount = 0; 
    setTime();
    displayQuestion(questionCount);
    
}

//display questions in order
var displayQuestion = function(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        ans1.textContent = questions[id].options[0];
        ans2.textContent = questions[id].options[1];
        ans3.textContent = questions[id].options[2];
        ans4.textContent = questions[id].options[3];
    }    
}

//check answer and move to next question
var checkAnswer = function(event) {
    event.preventDefault();
    resultEL.style.display = "block";
    var resultText = document.createElement("p");
    resultEL.appendChild(resultText);

    //display result for 2 seconds
    setTimeout(function() {
        resultText.style.display = "none"
    }, 2000);

    //Check the answer
    if (questions[questionCount].answer === event.target.value) {
        resultText.textContent = "Correct";
    }
    else if (questions[questionCount].answer !== event.target.value) {
        timer = timer - 10;
        resultText.textContent = "Wrong";
    };

    //Increment Count to move to next question
    if (questionCount < questions.length) {
        questionCount++;
    }
    displayQuestion(questionCount);
}

var addScore = function(event) {
    event.preventDefault();

    scoreEL.style.display = "none";
    highScoreEl.style.display ="block";

    var name = nameInput.value.toUpperCase();
    scoresList.push({name: name, score: timer});

    //sort the scores
    scoresList = scoresList.sort((a, b) => {
        if (a.score < b.score) {
            return 1;
        }
        else {
            return -1;
        }
    }); 

    scoreListEl.innerHTML="";
    saveScores();
    showScores();


    for (let i=0; i < scoresList.length; i++) {
        var retrieveScores = localStorage.getItem("scoresList");        
        var scoreListing = JSON.parse(retrieveScores);
        console.log(scoreListing);
        var scoreListItem = document.createElement("li");
        scoreListItem.textContent = scoreListing[i].name + ": " + scoreListing[i].score;        
        scoreListEl.append(scoreListItem);
    }
    //saveScores();
    //showScores();
}

//save scores to localStorage
var saveScores = function() {
    localStorage.setItem("scoresList", JSON.stringify(scoresList));
}

//show scores on the high score page
var showScores = function () {
    var savedScoreList = JSON.parse(localStorage.getItem("scoresList"));
    
    if (savedScoreList !== null) {
        scoresList = savedScoreList;
    }
}


// Event listener to start quiz
startBtnEl.addEventListener("click", startQuiz);

//Event listeners for answer buttons
ans1.addEventListener("click", checkAnswer);
ans2.addEventListener("click", checkAnswer);
ans3.addEventListener("click", checkAnswer);
ans4.addEventListener("click", checkAnswer);

//event listener to submit score
submitScoreBtn.addEventListener("click", addScore);

//Restart Quiz 
restartBtn.addEventListener("click", function() {
    highScoreEl.style.display = "none";
    titleEl.style.display = "block";
    timer = 60;
})

scoreBar();

// View High Scores
highScoreBtn.addEventListener("click", function() {
        titleEl.style.display = "none";
        highScoreEl.style.display = "block";
        showScores();    
})




