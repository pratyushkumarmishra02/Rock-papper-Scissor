let rock = document.querySelector("#rock");
let papper = document.querySelector("#papper");
let scissor = document.querySelector("#scissor");
let user_Score = document.querySelector("#user-score");
let comp_Score = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const msgCOntainer = document.querySelector(".msg-container");
const resetBtn = document.querySelector("#restart-btn");
let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
  const choiceArr = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return choiceArr[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game Draw! Please Play Again😜";
  msg.style.backgroundColor = "skyblue";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    user_Score.innerText = userScore;
    msg.innerText = `You won! Your ${userChoice} beats ${compChoice}🎉`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    comp_Score.innerText = compScore;
    msg.innerText = `Computer won! ${compChoice} beats your ${userChoice}😒`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const resetGame = () => {
  userScore = 0;
  compScore = 0;
  user_Score.innerText = userScore;
  comp_Score.innerText = compScore;
  msg.innerText = "Play Your Turn";
  msg.style.backgroundColor = "rgb(31, 29, 29)";
};

resetBtn.addEventListener("click", resetGame);
