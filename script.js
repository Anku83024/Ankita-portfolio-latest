// Show current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Typewriter effect (for class "typewriter")
const typeText = "Frontend Developer | Web Designer | Data Analyst";
let i = 0;
const speed = 100;
const typewriterElement = document.querySelector(".typewriter");

function typeWriter() {
  if (typewriterElement && i < typeText.length) {
    typewriterElement.innerHTML += typeText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

if (typewriterElement) {
  typewriterElement.innerHTML = ""; // clear on reload
  typeWriter();
}
