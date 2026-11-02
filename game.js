/* Trivia Game */

// Question Multi-dimensional Array
// Each question contains:
// Question, correct answer index, and 3 answer choices.

var questions = [
    [
        "What is the capital of the United States?",
        0,
        "Washington, D.C.",
        "New York City",
        "Los Angeles"
    ],

    [
        "Which planet is known as the Red Planet?",
        1,
        "Venus",
        "Mars",
        "Jupiter"
    ],

    [
        "How many sides does a triangle have?",
        2,
        "Four",
        "Five",
        "Three"
    ]
];

// Variables to track game progress
var count = 0;
var score = 0;


// Initialize the game
function initializeGame() {

    count = 0;
    score = 0;

    // Load the Play Game button dynamically
    document.getElementById("prompt").innerHTML =
        "<button onclick='playGame()'>Play Game</button>";
}


// Start or continue the game
function playGame() {

    // Check if there are questions remaining
    if (count >= questions.length) {
        restartGame();
        return;
    }

    // Access the current question
    var currentQuestion = questions[count];

    // Remove and save the question
    var questionText = currentQuestion.shift();

    // Remove and save the correct answer index
    var correctIndex = currentQuestion.shift();

    // Create the question display
    var output = "";

    output += "<p id='counter'>Question " +
        (count + 1) + " of " + questions.length + "</p>";

    output += "<p id='question'>" + questionText + "</p>";

    output += "<ul id='answers'>";

    // Create the answer choices
    for (var index = 0; index < currentQuestion.length; index++) {

        output += "<li><a href='#' onclick='checkAnswer(" +
            index + ", " + correctIndex + "); return false;'>" +
            currentQuestion[index] +
            "</a></li>";
    }

    output += "</ul>";

    // Display the question and answers
    document.getElementById("prompt").innerHTML = output;
}


// Check the user's answer
function checkAnswer(chosenIndex, correctIndex) {

    // Compare the selected answer to the correct answer
    if (chosenIndex === correctIndex) {

        score++;

        document.getElementById("prompt").innerHTML +=
            "<p id='feedback' style='color: green;'>Correct! Great job!</p>";

    } else {

        document.getElementById("prompt").innerHTML +=
            "<p id='feedback' style='color: red;'>Incorrect! Try again next time.</p>";
    }

    // Move to the next question
    count++;

    // Check whether all questions have been answered
    if (count >= questions.length) {

        document.getElementById("prompt").innerHTML +=
            "<p>You finished the game!</p>" +
            "<p>Your score: " + score + " out of " +
            questions.length + "</p>" +
            "<button onclick='location.reload()'>Restart Game</button>";

    } else {

        document.getElementById("prompt").innerHTML +=
            "<button onclick='playGame()'>Next Question</button>";
    }
}


// Initialize the game when the page loads
initializeGame();