import triviaData from "./data/questions.js";

const homeSection = document.querySelector(".home");
const categorySection = document.querySelector(".categories");
const categoryList = document.querySelector(".category-list");
const scoreboardSection = document.querySelector(".scoreboard");
const quizSection = document.querySelector(".quiz");
const playAgainSection = document.querySelector(".results-actions_again");
const resetSection = document.querySelector(".results-actions_reset");
const scoreSection = document.getElementById("score-summary")


const homeBtn = document.getElementById("home-btn");
const startBtn = document.getElementById("category-form");
const submitBtn = document.querySelector(".quiz-form");
const sButton = document.getElementById("submit-btn");


const againBtn = document.getElementById("play-again-btn");
const resetBtn = document.getElementById("reset-btn");




let questionSet = document.querySelector(".quiz-fieldset");
let updScoreboard = document.querySelector(".scoreboard-list");
let time = document.getElementById("timer-display");
let finalScore = document.getElementById("final-score")

let isHome = true;
let isAgain = false;
let isReset = false;
let isButton = true;
let isCategory = false;
let isScoreboard = true;
let isQuiz = false;
let isScore = false;


let playerName;
let categoryKey;
let categoryQuestions;
let questions;
let score = 0;
let questionNum = 0;
let chosenAns;
let chosenLabel;
let localS;
let counter;
let ansCounter;
let timeValue = 15;
let ansTime = 3;
let correctAnswer;
let check;

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
    isButton ? sButton.style.display = "inline-block" : sButton.style.display = "none";
    isScore ? scoreSection.style.display = "block" : scoreSection.style.display = "none";
}

function beginGame(e) {
    questionNum = 0;
    isHome = false;
    isCategory = true;
    isScoreboard = false;
    isReset = false;
    isAgain = false;
    playerName = document.getElementById("player-name-input").value ? document.getElementById("player-name-input").value: "Player";

    checkUI();
}

function startGame(e) {
    e.preventDefault();
    categoryKey = Array.from(e.target.querySelectorAll('input')).filter(item => item.checked)[0].value;
    isCategory = false;
    isQuiz = true;
    isButton = true;
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
    // sButton = true;
    // checkUI();

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
        radioLabel.for = item;
        radioLabel.textContent = item;
        radioLabel.id = item;

        questionSet.appendChild(radioItem)
        questionSet.appendChild(radioLabel)
    })

    correctAnswer = questions[questionNum].correctAns;
    startTimer(timeValue);
}

function startTimer(t) {
    counter = setInterval(timer, 1000)
    function timer() {
        time.textContent = t - 1;
        t--;
        if (t < 0) {
            clearInterval(counter);
            resetQuest(false)
            // checkAns();
        }
    }
}

function checkAns(e) {
    e.preventDefault();
    clearInterval(counter);

    chosenAns = Array.from(questionSet.querySelectorAll("input")).filter(item => item.checked)[0].id;
    chosenLabel = Array.from(questionSet.querySelectorAll("label")).filter(item => item.id === chosenAns)[0];
    check = chosenAns === correctAnswer

    resetQuest(check)
}

function resetQuest(ans) {
    isButton = false;
    if (ans) {
        score++;
        chosenLabel.style.color = "green";
        questionSet.querySelector("p").style.color = "green";
    } else {
        chosenLabel.style.color = "red";
        questionSet.querySelector("p").style.color = "red";
    }

    time.textContent = `Correct Answer: ${correctAnswer}`;
    timeValue = 15;

    checkUI();
    displayAns(ansTime);
}

function displayAns(t) {
    ansCounter = setInterval(timer2, 1000)
    function timer2() {
        t--
        if (t < 0) {
            clearInterval(ansCounter)
            time.innerHTML = "";
            ansTime = 3;
            isButton = true;
            nextQuestion();
        }
    }
}

function nextQuestion() {
    checkUI();
    time.textContent = 15;
    questionNum++;
    questionNum < 10 ? askQuestions() : tallyScore();
}

function tallyScore() {
    localS = localStorage.getItem("scores") ? JSON.parse(localStorage.getItem("scores")) : [];
    localS.push({name: playerName, playerScore: score, category: categoryKey})
    localStorage.setItem("scores", JSON.stringify(localS));

    createScoreCard(localS)

    isQuiz = false;
    isScoreboard = true;
    isAgain = true;
    isReset = true;
    isScore = true;

    checkUI ();
}

function createScoreCard(scores) {
    updScoreboard.innerHTML = "";
    scores.forEach(item => {
        let playerCardCont = document.createElement("div")
        let playerCard = document.createElement("p")
        playerCard.textContent = item.name
        let playerScore = document.createElement("p")
        playerScore.textContent = `${item.playerScore * 10}`
        let scoreCategory = document.createElement("p")
        scoreCategory.textContent = item.category

        playerCardCont.appendChild(playerCard)
        playerCardCont.appendChild(playerScore)
        playerCardCont.appendChild(scoreCategory)

        updScoreboard.appendChild(playerCardCont);
        finalScore.textContent = `${item.playerScore * 10}`;
    })
}

function resetScoreboard(e) {
    localStorage.clear();
    updScoreboard.innerHTML = "";
    isReset = false;
    finalScore.textContent = "";
    isScore = false;

    checkUI();
}

function resetGame() {
    isHome = true;
    isAgain = false;
    isReset = false;
    isButton = true;
    isCategory = false;
    isScoreboard = true;
    isQuiz = false;
    isScore = false;

    playerName;
    categoryKey;
    categoryQuestions;
    questions;
    score = 0;
    questionNum = 0;
    chosenAns;
    chosenLabel;
    localS;
    counter;
    ansCounter;
    timeValue = 15;
    ansTime = 3;
    correctAnswer;
    check;

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

