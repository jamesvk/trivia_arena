const homeSection = document.querySelector(".home");
const categorySection = document.querySelector(".categories");
const categoryList = document.querySelector(".category-list");
const scoreboardSection = document.querySelector(".scoreboard");


const homeBtn = document.querySelector(".home-btn");

let isHome = true;
let isCategory = false;
let isScoreboard = true;

let categoryKey;

function checkUI() {
    isHome ? homeSection.style.display = "block" : homeSection.style.display = "none";
    isCategory ? categorySection.style.display = "block" : categorySection.style.display = "none";
    isScoreboard ? scoreboardSection.style.display = "block" : scoreboardSection.style.display = "none";
}

function startGame(e) {
    isHome = false;
    isCategory = true;
    isScoreboard = false;

    checkUI();
}

function onClick(e) {
    categoryKey = e.target.textContent;
}

function init() {
    // Event Listeners
    homeBtn.addEventListener('click', startGame)
    categoryList.addEventListener('click', onClick)

    checkUI();

}

init();