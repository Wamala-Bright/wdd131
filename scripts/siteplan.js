// siteplan.js
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".color-card").forEach(card => {
    card.addEventListener("click", () => {
      alert(card.dataset.message);
    });
  });
});
