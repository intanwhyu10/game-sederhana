function startGame() {
  const gameArea = document.getElementById("game-area");
  gameArea.innerHTML = "Permainan dimulai!";
  gameArea.style.backgroundColor = "#60a3bc";

  // Contoh interaksi sederhana
  setTimeout(() => {
    gameArea.innerHTML = "Game selesai!";
    gameArea.style.backgroundColor = "#82ccdd";
  }, 3000); // 3 detik permainan
}
