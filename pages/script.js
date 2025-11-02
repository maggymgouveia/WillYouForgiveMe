const noButton = document.getElementById("noButtonMove");
let moveCount = 0;

noButton.addEventListener("mouseover", () => {
  moveCount++;

  const section = noButton.closest("section");
  const sectionRect = section.getBoundingClientRect();

  // Random position within the section
  const randomX = Math.random() * (sectionRect.width - noButton.offsetWidth);
  const randomY = Math.random() * (sectionRect.height - noButton.offsetHeight);

  // If it's the 3rd movement, make it fly off screen
  if (moveCount >= 3) {
    noButton.style.transition = "transform 1s ease";
    noButton.style.transform = "translate(100vw, -100vh)"; // flies off screen
    setTimeout(() => {
      noButton.style.display = "none"; // hide completely after it flies away
    }, 1000);
    return;
  }

  // Otherwise, move it somewhere random inside the section
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});


function closeWindow() {
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = "about:blank";
  }, 500);
}