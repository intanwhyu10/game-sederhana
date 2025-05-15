const colors = [
  { name: "Merah", code: "red" },
  { name: "Biru", code: "blue" },
  { name: "Hijau", code: "green" },
  { name: "Kuning", code: "yellow" },
  { name: "Ungu", code: "purple" },
  { name: "Hitam", code: "black" }
];

let score = 0;
let timeLeft = 30;
let gameInterval;
let countdown;

function startGame() {
  score = 0;
  timeLeft = 30;
  document.getElementById("score").textContent = "Skor: 0";
  document.getElementById("timer").textContent = "Waktu: 30 detik";
  generateButtons();
  nextQuestion();

  clearInterval(countdown);
  countdown = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `Waktu: ${timeLeft} detik`;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      document.getElementById("color-text").textContent = "Selesai!";
    }
  }, 1000);
}

function generateButtons() {
  const container = document.getElementById("button-container");
  container.innerHTML = "";
  colors.forEach((color) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-dark";
    btn.textContent = color.name;
    btn.onclick = () => checkAnswer(color.code);
    container.appendChild(btn);
  });
}

let correctColor = "";

function nextQuestion() {
  const textColor = colors[Math.floor(Math.random() * colors.length)];
  const textWord = colors[Math.floor(Math.random() * colors.length)];

  const colorText = document.getElementById("color
