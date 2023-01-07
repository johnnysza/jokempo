const handOptions = {
  "rock": "./assets/Rock.png",
  "paper": "./assets/Paper.png",
  "scissors": "./assets/Scissors.png"
}

let scoreP = 0;
let scoreC = 0;
let scoreD = 0;

const pickUserHand = (hand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // set user Image
  document.getElementById("userPickImage").src = handOptions[hand];

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * hands.length)];
    
   
    document.getElementById("computerPickImage").src = handOptions[cpHand]
    
    referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {
  if (userHand === "paper" && cpHand === "scissors") {
    setDecision("VOCÊ PERDEU!");
    setScoreC(scoreC + 1);
  }
  if (userHand === "paper" && cpHand === "rock") {
    setDecision("VOCÊ VENCEU!");
    setScoreP(scoreP + 1);
  }
  if (userHand === "paper" && cpHand === "paper") {
    setDecision("EMPATE!");
    setScoreD(scoreD + 1);
  }
  if (userHand === "rock" && cpHand === "scissors") {
    setDecision("VOCÊ VENCEU!");
    setScoreP(scoreP + 1);
  }
  if (userHand === "rock" && cpHand === "paper") {
    setDecision("VOCÊ PERDEU!");
    setScoreC(scoreC + 1);
  }
  if (userHand === "rock" && cpHand === "rock") {
    setDecision("EMPATE!");
    setScoreD(scoreD + 1);
  }
  if (userHand === "scissors" && cpHand === "scissors") {
    setDecision("EMPATE!");
    setScoreD(scoreD + 1);
  }
  if (userHand === "scissors" && cpHand === "rock") {
    setDecision("VOCÊ PERDEU!");
    setScoreC(scoreC + 1);
  }
  if (userHand === "scissors" && cpHand === "paper") {
    setDecision("VOCÊ VENCEU!");
    setScoreP(scoreP + 1);
  }
};

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
}

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
}

const setScoreP = (newScore) => {
  scoreP = newScore;
  document.querySelector(".score-jogador h1").innerText = newScore;
}

const setScoreC = (newScore) => {
  scoreC = newScore;
  document.querySelector(".score-computador h1").innerText = newScore;
}

const setScoreD = (newScore) => {
  scoreD = newScore;
  document.querySelector(".score-empates h1").innerText = newScore;
}