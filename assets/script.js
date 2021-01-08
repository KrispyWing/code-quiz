// Create Welcome Screen with start button
// Display questions
// check answer given
// deduct score if wrong
// Show next question
// end quiz when finished questions or timer is zero
// Allow user to save Initials and score
// Show saved scores
// Go back to start page
var headerContent = document.querySelector("#score-bar");
var pageContent = document.querySelector("#quiz-container");
var timer = 0

var scoreBar = function() {
    var highScores = document.createElement("h2");
    highScores.textContent = "High Scores";
    headerContent.appendChild(highScores);
    var timeDisplay = document.createElement("div");
    timeDisplay.textContent = ("Time: " + timer);
    headerContent.appendChild(timeDisplay);
}

var startPage = function() {
    var title = document.createElement("h1");
    title.textContent = "Javascript Quiz";    
    pageContent.appendChild(title);
    var rules = document.createElement("h3");
    rules.textContent = "Answer the following questions as quick as possible the faster you are the better your score. Incorrect answers will subtract 10 seconds!";    
    pageContent.appendChild(rules);
    var startButton = document.createElement("button");
    startButton.textContent = "Start Quiz";
    pageContent.appendChild(startButton);
}

var checkTimer = function() {    
    
}
scoreBar();
startPage();