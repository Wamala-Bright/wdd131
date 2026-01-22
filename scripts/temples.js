// Footer dates
const yearSpan = document.querySelector('#year');
const modifiedSpan = document.querySelector('#modified');

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;

// Hamburger menu
const menuButton = document.querySelector('#menu');
const nav = document.querySelector('#nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuButton.textContent = nav.classList.contains('open') ? '✖' : '☰';
});
