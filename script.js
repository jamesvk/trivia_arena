import triviaData from "./data/questions.js";

const homeSection = document.querySelector(".home");
const categorySection = document.querySelector(".categories");
const categoryList = document.querySelector(".category-list");
const scoreboardSection = document.querySelector(".scoreboard");
const quizSection = document.querySelector(".quiz")
// const quizTimerSec = document.getElementById("quiz-timer")
const playAgainSection = document.querySelector(".results-actions_again")
const resetSection = document.querySelector(".results-actions_reset")


const homeBtn = document.getElementById("home-btn");
// const startBtn = document.getElementById("start-btn");
const startBtn = document.getElementById("category-form");
// const submitBtn = document.getElementById("submit-btn");
const submitBtn = document.querySelector(".quiz-form")
const againBtn = document.getElementById("play-again-btn")
const resetBtn = document.getElementById("reset-btn")


let questionSet = document.querySelector(".quiz-fieldset");
let updScoreboard = document.querySelector(".scoreboard-list");
let time = document.getElementById("timer-display")

let isHome = true;
let isAgain = false;
let isReset = false;
let isCategory = false;
let isScoreboard = true;
let isQuiz = false;
// let gameStarted = false;


let playerName;
let categoryKey;
let categoryQuestions;
let questions;
let score = 0;
let questionNum = 0;
let ansChoice;
let localS;
let counter;
let timeValue = 15;

function displayItems() {
    localS = localStorage.getItem("scores") ? JSON.parse(localStorage.getItem("scores")) : [];
    if (localS.length) {
        createScoreCard(localS)
        isReset = true;
    } else {
        resetScoreboard();
    }

    checkUI()
}

function checkUI() {
    isHome ? homeSection.style.display = "block" : homeSection.style.display = "none";
    isAgain ? playAgainSection.style.display = "block" : playAgainSection.style.display = "none";
    isReset ? resetSection.style.display = "block" : resetSection.style.display = "none";
    isCategory ? categorySection.style.display = "block" : categorySection.style.display = "none";
    isScoreboard ? scoreboardSection.style.display = "block" : scoreboardSection.style.display = "none";
    isQuiz ? quizSection.style.display = "block" : quizSection.style.display = "none";
}

function beginGame(e) {
    questionNum = 0;
    isHome = false;
    isCategory = true;
    isScoreboard = false;
    isReset = false;
    isAgain = false;
    // gameStarted = false;
    playerName = document.getElementById("player-name-input").value ? document.getElementById("player-name-input").value: "Player";

    checkUI();
}

function startGame(e) {
    e.preventDefault();
    categoryKey = Array.from(e.target.querySelectorAll('input')).filter(item => item.checked)[0].value;

    isCategory = false;
    isQuiz = true;
    // gameStarted = true;

    checkUI();
    startQuiz();
}

function startQuiz() {

    questions = getQuestions();
    askQuestions();
}

function getQuestions() {
    let array = [];
    let NumArr  = [];
    let count = 10;
    categoryQuestions = triviaData.filter(item => item.category === categoryKey)

    let randomNum = Math.floor(Math.random() * 50) + 1;

    while (count > 0) {
        while (NumArr.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * 50) + 1;
        }
        NumArr.push(randomNum)
        array.push(categoryQuestions[0].data.filter(item => item.questionID === randomNum)[0])
        count--;
    }
    return array;
}

function askQuestions() {
    questionSet.innerHTML = ""

    let currentQuestion = document.createElement("p")
    currentQuestion.textContent = questions[questionNum].question
    questionSet.appendChild(currentQuestion);

    questions[questionNum].options.forEach(item => {
        let radioItem = document.createElement("input");
        radioItem.type = "radio";
        radioItem.id = item;
        radioItem.name = "thisQuestion"
        radioItem.value = item;
        radioItem.required = true;

        let radioLabel = document.createElement("label")
        radioLabel.htmlFor = item;
        radioLabel.textContent = item;

        questionSet.appendChild(radioItem)
        questionSet.appendChild(radioLabel)
    })
    startTimer(timeValue);
}

function startTimer(t) {
    counter = setInterval(timer, 1000)
    function timer() {
        time.textContent = t - 1;
        t--;
        if (t <= 0) {
            clearInterval(counter);
            timeValue = 0;
            time.innerHTML = "";
            resetQuest()
        }
    }
}

function checkAns(e) {
    e.preventDefault();
    clearInterval(counter);

    ansChoice = timeValue ? Array.from(questionSet.querySelectorAll("input")).filter(item => item.checked)[0].id : "";
    ansChoice === questions[questionNum].correctAns ? score++ : null;
    resetQuest()
}

function resetQuest() {
    timeValue = 15;
    nextQuestion();
}

function nextQuestion() {
    time.textContent = 15;
    questionNum++;
    questionNum < 10 ? askQuestions() : tallyScore();
}

function tallyScore() {
    localS = localStorage.getItem("scores") ? JSON.parse(localStorage.getItem("scores")) : [];
    localS.push({name: playerName, playerScore: score})
    localStorage.setItem("scores", JSON.stringify(localS));

    createScoreCard(localS)

    isQuiz = false;
    isScoreboard = true;
    isAgain = true;
    isReset = true;

    checkUI ();
}

function createScoreCard(scores) {
    updScoreboard.innerHTML = "";
    scores.forEach(item => {
        let playerCardCont = document.createElement("div")
        let playerCard = document.createElement("p")
        playerCard.textContent = item.name
        let playerScore = document.createElement("p")
        playerScore.textContent = item.playerScore

        playerCardCont.appendChild(playerCard)
        playerCardCont.appendChild(playerScore)

        updScoreboard.appendChild(playerCardCont);
    })
}

function resetScoreboard(e) {
    localStorage.clear();
    updScoreboard.innerHTML = "";
    isReset = false;

    checkUI();
}

function resetGame() {
    isHome = true;
    isAgain = false;
    isReset = updScoreboard.querySelectorAll("div").length ? true : false;
    isCategory = false;
    isScoreboard = true;
    isQuiz = false;
    // gameStarted = false;

    categoryKey = "";
    categoryQuestions = "";
    questions = "";
    score = 0;

    checkUI()
}

function init() {
    // Event Listeners
    homeBtn.addEventListener("click", beginGame);
    startBtn.addEventListener("submit", startGame);
    submitBtn.addEventListener("submit", checkAns);
    resetBtn.addEventListener("click", resetScoreboard);
    againBtn.addEventListener("click", resetGame);

    document.addEventListener("DOMContentLoaded", displayItems)

    checkUI();
}

init();

