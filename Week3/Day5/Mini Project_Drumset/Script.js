function playSound(key) {
  const audio = document.querySelector(
    `audio[data-key="${key.toUpperCase()}"]`
  );
  const keyDiv = document.querySelector(
    `.key[data-key="${key.toUpperCase()}"]`
  );
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  keyDiv.classList.add("playing");
  setTimeout(() => keyDiv.classList.remove("playing"), 150);
}

document.addEventListener("keydown", (e) => {
  playSound(e.key);
});

document.querySelectorAll(".key").forEach((key) => {
  key.addEventListener("click", () => {
    playSound(key.getAttribute("data-key"));
  });
});
