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
let countdown;
let correctColor = "";

function startGame() {
  score = 0;
  timeLeft = 30;
  document.getElementById("score").textContent = "Skor: 0";
  document.getElementById("timer").textContent = "Waktu: 30 detik";
  document.getElementById("color-text").textContent = "Tunggu...";
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

function nextQuestion() {
  const textColor = colors[Math.floor(Math.random() * colors.length)];
  const textWord = colors[Math.floor(Math.random() * colors.length)];

  const colorText = document.getElementById("color-text");
  colorText.textContent = textWord.name;
  colorText.style.color = textColor.code;
  correctColor = textColor.code;
}

function checkAnswer(selectedColor) {
  if (timeLeft <= 0) return;

  if (selectedColor === correctColor) {
    score++;
    document.getElementById("score").textContent = `Skor: ${score}`;
  }
  nextQuestion();
}
