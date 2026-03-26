import triviaData from "./data/questions.js";

/* Home Page */
const homeSection = document.querySelector(".home");
const homeNextButton = document.getElementById("home-btn");
/* Category Page */
const categorySection = document.querySelector(".categories");
// const categoryList = document.querySelector(".category-list");
const quizStartButton = document.getElementById("category-form");
/* Quiz Page(s) */
const quizSection = document.querySelector(".quiz");
// let time = document.getElementById("timer-display");
const timerBarSection = document.getElementById("timer-bar-container");
const timerBarDiv = document.getElementById("timer-bar");
const finalAnswerSection = document.querySelector(".quiz-form");
let questionSet = document.querySelector(".quiz-fieldset");
const finalAnswerButton = document.getElementById("submit-btn");
/* Final Score Page */
const finalScoreSection = document.getElementById("score-summary")
let finalScore = document.getElementById("final-score")
const scoreboardSection = document.querySelector(".scoreboard");
let updScoreboard = document.querySelector(".scoreboard-list");
/* Results, Actions */
const playAgainSection = document.querySelector(".results-actions_again");
const playAgainButton = document.getElementById("play-again-btn");
const resetSection = document.querySelector(".results-actions_reset");
const resetSBButton = document.getElementById("reset-btn");

let isHome = true;
let isCategory = false;
let isQuiz = false;
let isTimerBar = false;
let isFinalAnswerButton = true;
let isFinalScore = false;
let isScoreboard = false;
let isAgain = false;
let isReset = false;

let localS;
let playerName;
let categoryKey;
let questions;
let correctAnswer;
let questionTimeCounter = 15;
let questionCounter;
// let chosenAns;
// let chosenLabel;
let ansTimeCounter = 3;
let ansCounter;
let score = 0;
let questionNum = 0;
// Refreshing the page resets all JS variables to their initial values because the script runs from scratch.

function displayItems() {
    localS = localStorage.getItem("scores") ? JSON.parse(localStorage.getItem("scores")) : [];
    if (localS.length) {
        createScoreCard(localS);
        isScoreboard = true;
        isReset = true;
    }

    checkUI()
}

function checkUI() {
    isHome ? homeSection.style.display = "flex" : homeSection.style.display = "none";
    isCategory ? categorySection.style.display = "block" : categorySection.style.display = "none"; 
    // <section> display by default is block
    isQuiz ? quizSection.style.display = "block" : quizSection.style.display = "none";
    isTimerBar ? timerBarSection.style.display = "block" : timerBarSection.style.display = "none";
    isFinalAnswerButton ? finalAnswerButton.style.display = "inline-block" : finalAnswerButton.style.display = "none";
    // <button> is display: inline-block by default (in most browsers)
    isFinalScore ? finalScoreSection.style.display = "block" : finalScoreSection.style.display = "none";
    // <p> has a default display of: block
    isScoreboard ? scoreboardSection.style.display = "block" : scoreboardSection.style.display = "none";
    isAgain ? playAgainSection.style.display = "block" : playAgainSection.style.display = "none";
    // <div> has a default display of: block
    isReset ? resetSection.style.display = "block" : resetSection.style.display = "none";
}

function createScoreCard(scores) {
    updScoreboard.innerHTML = "";
    scores.forEach(item => {
        let playerCardCont = document.createElement("div");
        let playerCard = document.createElement("p");
        playerCard.textContent = item.name;
        let playerScore = document.createElement("p");
        playerScore.textContent = `${item.playerScore * 10}`;
        let scoreCategory = document.createElement("p");
        scoreCategory.textContent = item.category;

        playerCardCont.appendChild(playerCard);
        playerCardCont.appendChild(playerScore);
        playerCardCont.appendChild(scoreCategory);
        updScoreboard.appendChild(playerCardCont);

        if(!isHome) {
            finalScore.textContent = `${item.playerScore * 10}`;
        }
    })
}

function beginGame(e) {
    const playerNameInput = document.getElementById("player-name-input");
    playerName = playerNameInput.value.trim() || "Player";

    isHome = false;
    isCategory = true;
    isFinalScore = false;
    isScoreboard = false;
    isAgain = false;
    isReset = false;

    checkUI();
}

function startGame(e) {
    e.preventDefault();
    categoryKey = Array.from(e.target.querySelectorAll('input')).filter(item => item.checked)[0].value;
    isCategory = false;
    isQuiz = true;
    isFinalAnswerButton = true;
    isTimerBar = true;
    questions = getQuestions();

    checkUI();
    askQuestions();
}

function getQuestions() {
    let array = [];
    let NumArr  = [];
    let count = 10;
    let categoryQuestions = triviaData.filter(item => item.category === categoryKey)[0]
    let randomNum = Math.floor(Math.random() * 50) + 1;

    while (count > 0) {
        while (NumArr.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * 50) + 1;
        }
        NumArr.push(randomNum)
        array.push(categoryQuestions.data.filter(item => item.questionID === randomNum)[0])
        count--;
    }
    return array;
}

function askQuestions() {
    let count = 1;
    let letter;

    questionSet.innerHTML = "";

    let currentQuestion = document.createElement("p");
    currentQuestion.textContent = questions[questionNum].question
    questionSet.appendChild(currentQuestion);

    questions[questionNum].options.forEach(item => {
         switch (count) {
            case 1:
                letter = "(A) "
                break;
            case 2:
                letter = "(B) "
                break;
            case 3:
                letter = "(C) "
                break;
            case 4:
                letter = "(D) "
                break;
            default:
                break;
        }
        let radioItem = document.createElement("input");
        radioItem.type = "radio";
        radioItem.id = item;
        radioItem.name = "thisQuestion";
        radioItem.value = item;
        radioItem.required = true;
        radioItem.classList.add("question-input");

        let radioLabel = document.createElement("label");
        radioLabel.htmlFor = item;
        radioLabel.textContent = `${letter}${item}`;
        radioLabel.id = item;
        radioLabel.classList.add("question-label");

        let radioPair = document.createElement("div");
        radioPair.classList.add("radio-pair");

        radioPair.appendChild(radioItem);
        radioPair.appendChild(radioLabel);
        questionSet.appendChild(radioPair);

        count++;
    })

    correctAnswer = questions[questionNum].correctAns;
    startTimer(questionTimeCounter);
}

function startTimer(questionTime) {
    questionCounter = setInterval(timer, 1000)
    function timer() {
        // time.textContent = questionTime - 1;
        questionTime--;
        if (questionTime < 0) {
            clearInterval(questionCounter);
            resetQuest(false);
        }
    }
}

function checkAns(e) {
    e.preventDefault();
    clearInterval(questionCounter);

    let chosenAns = Array.from(questionSet.querySelectorAll("input")).filter(item => item.checked)[0].id;
    let check = chosenAns === correctAnswer;
    resetQuest(check);
}

function resetQuest(isCorrect) {
    isFinalAnswerButton = false;
    timerBarDiv.remove();
    let displayCorrectAns = document.createElement("p");
    // displayCorrectAns.innerText = `Correct Answer: ${correctAnswer}`;
    displayCorrectAns.innerText = `${correctAnswer}`;
    displayCorrectAns.id = "correct-answer";
    timerBarSection.appendChild(displayCorrectAns);
    // isTimerBar = false;

    if (isCorrect) {
        score++;
        // questionSet.querySelector("p").style.color = "green";
        // questionSet.querySelector("p").style.textShadow = "0 1px 2px rgba(0, 0, 0, 0.6)";
        displayCorrectAns.style.backgroundColor = "rgba(34, 197, 94, 1)";
    } else {
        // questionSet.querySelector("p").style.color =  "red";
        // questionSet.querySelector("p").style.textShadow = "0 1px 2px rgba(0, 0, 0, 0.6)";
        displayCorrectAns.style.backgroundColor = "rgba(239, 68, 68, 1)";
    }

    // time.textContent = `Correct Answer: ${correctAnswer}`;

    questionTimeCounter = 15;

    checkUI();
    displayAns(ansTimeCounter);
}

function displayAns(ansTime) {
    ansCounter = setInterval(timer2, 1000)
    function timer2() {
        ansTime--
        if (ansTime < 0) {
            clearInterval(ansCounter)
            // time.textContent = 15;
            let displayCorrectAns = document.getElementById("correct-answer");
            displayCorrectAns.remove();
            timerBarSection.appendChild(timerBarDiv);
            isFinalAnswerButton = true;
            isTimerBar = true;
            questionNum++;
            questionNum < 10 ? askQuestions() : tallyScore();
            checkUI();
        }
    }
}

function tallyScore() {
    localS = localStorage.getItem("scores") ? JSON.parse(localStorage.getItem("scores")) : [];
    localS.push({name: playerName, playerScore: score, category: categoryKey})
    localStorage.setItem("scores", JSON.stringify(localS));

    createScoreCard(localS)

    isQuiz = false;
    isFinalScore = true;
    isScoreboard = true;
    isAgain = true;
    isReset = true;

    playerName = undefined;
    categoryKey = undefined;
    questions = undefined;
    correctAnswer = undefined;
    questionCounter = undefined;
    ansCounter = undefined;
    score = 0;
    questionNum = 0;
}

function restartGame() {
    isHome = true;
    isAgain = false;
    isFinalScore = false;

    checkUI()
}

function resetScoreboard(e) {
    localStorage.clear();
    localS = undefined;
    isFinalScore = false;
    isScoreboard = false;
    updScoreboard.innerHTML = "";
    isReset = false;
    isHome = true;
    isAgain = false;
    isFinalScore = false;

    checkUI();
}

function init() {
    document.addEventListener("DOMContentLoaded", displayItems)
    // DOMContentLoaded runs on every page load, so the handler executes again after each refresh.
    homeNextButton.addEventListener("click", beginGame);
    quizStartButton.addEventListener("submit", startGame);
    // Use the form’s submit event because the form—not the button—controls
    // submission, so it reliably captures the selected radio value whether
    // the user clicks the button or presses Enter.
    finalAnswerSection.addEventListener("submit", checkAns);
    playAgainButton.addEventListener("click", restartGame);
    resetSBButton.addEventListener("click", resetScoreboard);
}

init();

