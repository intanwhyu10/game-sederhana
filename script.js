let score = 0;
let timeLeft = 15;
let gameInterval;
let countdownInterval;

function startGame() {
  score = 0;
  timeLeft = 15;
  document.getElementById("score-text").textContent = "Skor: 0";
  document.getElementById("timer").textContent = "Waktu: 15 detik";

  showRandomNumber();

  gameInterval = setInterval(showRandomNumber, 1000);

  countdownInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `Waktu: ${timeLeft} detik`;
    if (timeLeft === 0) {
      clearInterval(gameInterval);
      clearInterval(countdownInterval);
      document.getElementById("number-box").textContent = "Selesai!";
      document.getElementById("game-area").style.backgroundColor = "#d63031";
    }
  }, 1000);
}

function showRandomNumber() {
  const randomNum = Math.floor(Math.random() * 9) + 1;
  const box = document.getElementById("number-box");
  box.textContent = randomNum;

  box.onclick = function () {
    score++;
    document.getElementById("score-text").textContent = `Skor: ${score}`;
    showRandomNumber();
  };
}
