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
/* Final Score Page + Scoreboards */
const finalScoreSection = document.getElementById("score-summary")
// let finalScore = document.getElementById("final-score")
let finalScore = document.querySelector(".score-summary_title");
const scoreboardSection = document.querySelector(".scoreboard");
let updScoreboard = document.querySelector(".scoreboard-list");
let scoreboardHeader = document.getElementById("scoreboard-header");
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
let ansTimeCounter = 3;
let ansCounter;
let score = 0;
let questionNum = 0;

function displayItems() {
    localS = localStorage.getItem("scores") ? JSON.parse(localStorage.getItem("scores")) : [];
    if (localS.length) {
        createScoreCard(localS);
        isScoreboard = true;
        isReset = true;
    }

    checkUI();
}

function toggleDisplay(element, isVisible, displayType = "block") {
    element.style.display = isVisible ? displayType : "none";
}

function checkUI() {
    toggleDisplay(homeSection, isHome, "flex");
    toggleDisplay(categorySection, isCategory);
    toggleDisplay(quizSection, isQuiz);
    toggleDisplay(timerBarSection, isTimerBar);
    toggleDisplay(finalAnswerButton, isFinalAnswerButton, "inline-block");
    toggleDisplay(finalScoreSection, isFinalScore);
    toggleDisplay(scoreboardSection, isScoreboard);
    toggleDisplay(playAgainSection, isAgain);
    toggleDisplay(resetSection, isReset);
}

function createScoreCard(scores) {
    updScoreboard.innerHTML = "";

    const sortedScores = [...scores].sort((a, b) => b.playerScore - a.playerScore);

    sortedScores.forEach(item => {
        const playerCardCont = document.createElement("div");
        playerCardCont.classList.add("card-container");

        const playerCard = document.createElement("p");
        playerCard.textContent = `[${item.name}]`;

        const playerScore = document.createElement("p");
        playerScore.textContent = `Score: ${item.playerScore * 10}`;

        playerCardCont.appendChild(playerCard);
        playerCardCont.appendChild(playerScore);
        updScoreboard.appendChild(playerCardCont);
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
    categoryKey = Array.from(e.target.querySelectorAll("input")).find(item => item.checked).value;
    isCategory = false;
    isQuiz = true;
    isFinalAnswerButton = true;
    isTimerBar = true;
    questions = getQuestions();

    checkUI();
    askQuestions();
}

function getQuestions() {
    const category = triviaData.find(item => item.category === categoryKey);
    if (!category) return [];

    const questions = [...category.data];

    // Fisher-Yates Shuffle
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }

    return questions.slice(0,10);
}

function askQuestions() {
    questionSet.innerHTML = "";

    const current = questions[questionNum];
    const letters = ["(A)", "(B)", "(C)", "(D)"];

    let currentQuestion = document.createElement("p");
    currentQuestion.textContent = current.question
    questionSet.appendChild(currentQuestion);

    current.options.forEach((item, index) => {
        let radioPair = document.createElement("div");
        radioPair.classList.add("radio-pair");

        const radioItem = document.createElement("input");
        radioItem.type = "radio";
        radioItem.id = `question-${questionNum}-option-${index}`;
        radioItem.name = "thisQuestion";
        radioItem.value = item;
        radioItem.required = true;
        radioItem.classList.add("question-input");

        const radioLabel = document.createElement("label");
        radioLabel.htmlFor = radioItem.id;
        radioLabel.textContent = `${letters[index]} ${item}`;
        radioLabel.classList.add("question-label");

        radioPair.append(radioItem, radioLabel);
        questionSet.appendChild(radioPair);
    })

    correctAnswer = current.correctAns;
    startTimer(questionTimeCounter);
}

function startTimer(questionTime) {
    if (questionCounter) {
        clearInterval(questionCounter);
    }

    questionCounter = setInterval(() => {
        questionTime--;

        if (questionTime <= 0) {
            clearInterval(questionCounter);
            questionCounter = null;
            resetQuest(false);
        }
    }, 1000)
}

function checkAns(e) {
    e.preventDefault();

    if (questionCounter) {
        clearInterval(questionCounter);
    }

    const chosenAns = questionSet.querySelector('input[name="thisQuestion"]:checked');
    if(!chosenAns) return;

    const isCorrect = chosenAns.value === correctAnswer;
    resetQuest(isCorrect);
}

function resetQuest(isCorrect) {
    if (questionCounter) {
        clearInterval(questionCounter);
        questionCounter = null;
    }

    isFinalAnswerButton = false;
    timerBarDiv.remove();

    const displayCorrectAns = document.createElement("p");
    displayCorrectAns.innerText = correctAnswer;
    displayCorrectAns.id = "correct-answer";

    if (isCorrect) {
        score++;
        displayCorrectAns.style.backgroundColor = "rgba(34, 197, 94, 1)";
    } else {
        displayCorrectAns.style.backgroundColor = "rgba(239, 68, 68, 1)";
    }

    timerBarSection.appendChild(displayCorrectAns);
    questionTimeCounter = 15;

    checkUI();
    displayAns(ansTimeCounter);
}

function displayAns(ansTime) {
    if (ansCounter){
        clearInterval(ansCounter);
    }

    ansCounter = setInterval(() => {
        ansTime--
        if (ansTime <= 0) {
            clearInterval(ansCounter);
            ansCounter = null;

            const displayCorrectAns = document.getElementById("correct-answer");
            displayCorrectAns?.remove();

            timerBarSection.appendChild(timerBarDiv);

            isFinalAnswerButton = true;
            isTimerBar = true;

            questionNum++;
            questionNum < 10 ? askQuestions() : tallyScore();
            checkUI();
        }
    }, 1000);
}

function tallyScore() {
    if (!isHome) {
            finalScore.textContent = `Final Score: ${score * 10}`;
    }

    const savedScores = localStorage.getItem("scores");
    localS = savedScores ? JSON.parse(savedScores) : [];
    localS.push({name: playerName, playerScore: score, category: categoryKey});
    localStorage.setItem("scores", JSON.stringify(localS));

    createScoreCard(localS);

    if (questionCounter) clearInterval(questionCounter);
    if (ansCounter) clearInterval(ansCounter);

    isQuiz = false;
    isFinalScore = true;
    isScoreboard = true;
    isAgain = true;
    isReset = true;

    playerName = null;
    categoryKey = null;
    questions = null;
    correctAnswer = null;
    questionCounter = null;
    ansCounter = null;
    score = 0;
    questionNum = 0;

    checkUI();
}

function restartGame() {
    isHome = true;
    isAgain = false;
    isFinalScore = false;
    finalScore.textContent = null;

    checkUI()
}

function resetScoreboard(e) {
    localStorage.clear();
    localS = null;
    isFinalScore = false;
    isScoreboard = false;
    updScoreboard.innerHTML = "";
    isReset = false;
    isHome = true;
    isAgain = false;
    isFinalScore = false;
    finalScore.textContent = null;

    checkUI();
}

function init() {
    document.addEventListener("DOMContentLoaded", displayItems)
    // DOMContentLoaded runs on every page load, so the handler executes again after each refresh.
    homeNextButton.addEventListener("click", beginGame);
    quizStartButton.addEventListener("submit", startGame);
    // Use the form’s submit event because the form —not the button— controls
    // submission, so it reliably captures the selected radio value whether
    // the user clicks the button or presses Enter.
    finalAnswerSection.addEventListener("submit", checkAns);
    playAgainButton.addEventListener("click", restartGame);
    resetSBButton.addEventListener("click", resetScoreboard);
}

init();

