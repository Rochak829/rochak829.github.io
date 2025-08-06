// Simple typing animation for the heading text
document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector(".typing-text");
  if (!el) return;
  const fullText = el.textContent.trim();
  el.textContent = "";
  let i = 0;
  const speed = 60; // ms per character
  function typeChar() {
    if (i < fullText.length) {
      el.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeChar, speed);
    }
  }
  typeChar();
});

