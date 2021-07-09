const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const audio = document.querySelector(
      `audio[data-key="${key.dataset.key}"]`
    );
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  });
});
