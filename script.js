import triviaData from "./data/questions.js";

const homeSection = document.querySelector(".home");
const categorySection = document.querySelector(".categories");
const categoryList = document.querySelector(".category-list");
const scoreboardSection = document.querySelector(".scoreboard");
const quizSection = document.querySelector(".quiz")


const homeBtn = document.getElementById("home-btn");
const startBtn = document.getElementById("start-btn");
const submitBtn = document.getElementById("submit-btn")

let questionSet = document.querySelector(".quiz-fieldset");

let isHome = true;
let isCategory = false;
let isScoreboard = true;
let isQuiz = false;
let gameStarted = false;

let categoryKey;
let categoryQuestions;
let score;
let questionNum = 0;
let ansChoice;

function checkUI() {
    isHome ? homeSection.style.display = "block" : homeSection.style.display = "none";
    isCategory ? categorySection.style.display = "block" : categorySection.style.display = "none";
    isScoreboard ? scoreboardSection.style.display = "block" : scoreboardSection.style.display = "none";
    isQuiz ? quizSection.style.display = "block" : quizSection.style.display = "none";
}

function beginGame(e) {
    isHome = false;
    isCategory = true;
    isScoreboard = false;

    checkUI();
}

function startGame(e) {
    isCategory = false;
    isQuiz = true;
    gameStarted = true;

    checkUI();
    startQuiz();
}

function onClick(e) {
    categoryKey = e.target.textContent;
}

function startQuiz() {
    let questions = getQuestions();
    askQuestions(questions);
}

function getQuestions() {
    let array = [];
    let count = 10;

    categoryQuestions = triviaData.filter(item => item.category === categoryKey)

    while (count > 0) {
        let randomNum = Math.floor(Math.random() * 50) + 1;
        array.includes(randomNum) ? null : array.push(categoryQuestions[0].data.filter(item => item.questionID === randomNum)[0])
        count--;
    }
    return array;
}

function askQuestions(questions) {
    let currentQuestion = document.createElement("p")
    currentQuestion.textContent = questions[questionNum].question
    questionSet.appendChild(currentQuestion);

    questions[questionNum].options.forEach(item => {
        let inputItem = document.createElement("input");
        inputItem.type = "radio";
        inputItem.id = item;
        inputItem.name = "thisQuestion"
        inputItem.value = item;
        // console.log(inputItem)

        let inputLabel = document.createElement("label")
        inputLabel.htmlFor = item;
        inputLabel.textContent = item;

        questionSet.appendChild(inputItem)
        questionSet.appendChild(inputLabel)
    })
}

function nextQuestion(e) {
    ansChoice = Array.from(questionSet.querySelectorAll('input')).filter(item => item.checked)
}

function init() {
    // Event Listeners
    homeBtn.addEventListener('click', beginGame)
    categoryList.addEventListener('click', onClick)
    startBtn.addEventListener('click', startGame)
    submitBtn.addEventListener('click', nextQuestion)

    checkUI();
}

init();

