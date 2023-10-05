function removeCard(e) {
  e.parentNode.parentNode.style.transform = "translateY(-35px)";
  e.parentNode.parentNode.style.animationTimingFunction = "linear";
  setTimeout(() => {
    e.parentNode.parentNode.remove();
  }, 180);
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    removeCard(e.target);
    savedCards();
  }
});

export { removeCard };
