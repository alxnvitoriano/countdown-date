const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const startDate = "1 Jun 2024"; // A data de início

function countdown() {
  const startDateTime = new Date(startDate);
  const currentDate = new Date();

  const totalSeconds = (currentDate - startDateTime) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("hearts-container");

  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
    heart.style.top = `${Math.random() * 100}vh`; // Posição vertical aleatória
    heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // Animação entre 5 e 10 segundos
    heart.style.opacity = Math.random() * 0.5 + 0.5; // Opacidade entre 0.5 e 1
    container.appendChild(heart);

    // Remove o coração do DOM após a animação
    setTimeout(() => {
      heart.remove();
    }, 10000); // Correspondente à duração da animação + algum tempo
  }

  // Cria corações a cada 500ms
  setInterval(createHeart, 500);
});
