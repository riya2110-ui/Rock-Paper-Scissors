let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore=document.querySelector("#your-score");
const compScore=document.querySelector("#comp-score");

const drawgame = () => {
  console.log("Draw game");
  msg.innerText = "Game was draw!Play again";
  msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, compchoice, userchoice) => {
  if (userWin == true) {
    userscore ++;
    userScore.innerText=userscore;
    console.log("You Win!!");
    msg.innerText = `You Win!!your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore ++;
    compScore.innerText=compscore
    console.log("You lose!!");
    msg.innerText =`You lose!!${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};
const genCompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const rndIdx = Math.floor(Math.random() * 3);
  return options[rndIdx];
};

const playgame = (userchoice) => {
  console.log("users-choice =", userchoice);
  const compchoice = genCompchoice();
  console.log("comp-choice =", compchoice);

  if (userchoice === compchoice) {
    // draw game:
    drawgame();
  } else {
    let userWin = true;
    if (userchoice === "scissors") {
      // rock,paper
      userWin = compchoice === "rock" ? false : true;
    } else if (userchoice === "paper") {
      // scissors,rock
      userWin = compchoice === "scissors" ? false : true;
    } else {
      // paper,scissors
      userWin = compchoice === "paper" ? false : true;
    }
    showWinner(userWin, compchoice, userchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
