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
var timer = 0

var scoreBar = function() {    
    var timeDisplay = document.createElement("span");
    timeDisplay.textContent = (timer);
    score.appendChild(timeDisplay);
}


var checkTimer = function() {    
    
}


scoreBar();
