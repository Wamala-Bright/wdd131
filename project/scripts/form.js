// Set current year in footer
document.querySelector("#year").textContent = new Date().getFullYear();

// DOM Elements
const form = document.querySelector("#feedbackForm");
const confirmation = document.querySelector("#confirmation");
const feedbackSummary = document.querySelector("#feedbackSummary");

// Load saved feedback from localStorage
let feedbackData = JSON.parse(localStorage.getItem("feedback")) || [];

// Handle form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Gather form data
  const page = form.page.value;
  const rating = form.rating.value;
  const visitDate = form.visitDate.value;
  const features = Array.from(form.querySelectorAll("input[name='features']:checked")).map(f => f.value);
  const comments = form.comments.value;
  const userName = form.userName.value || "Anonymous";

  const feedback = { page, rating, visitDate, features, comments, userName };
  feedbackData.push(feedback);

  // Save to localStorage
  localStorage.setItem("feedback", JSON.stringify(feedbackData));

  // Show confirmation
  feedbackSummary.innerHTML = `
    <strong>${userName}</strong> submitted feedback for <strong>${page}</strong> page.<br>
    Rating: ${rating}/5<br>
    Features liked: ${features.length ? features.join(", ") : "None"}<br>
    Comments: ${comments || "None"}
  `;
  confirmation.style.display = "block";

  // Reset form
  form.reset();
});
