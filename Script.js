// ----- NAVBAR HAMBURGER TOGGLE (MOBILE) -----
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

// Create a hamburger icon dynamically (if not already added in HTML)
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '&#9776;'; // Unicode for ☰
navbar.insertBefore(hamburger, navLinks);

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ----- FORM SUBMISSION HANDLING -----
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const college = form.querySelector('input[placeholder="College Name"]').value;
  const eventSelected = form.querySelector('select').value;

  // Basic validation
  if (!name || !email || !college || !eventSelected) {
    alert('Please fill out all fields before submitting.');
    return;
  }

  // Success message
  alert(`Thank you, ${name}! You have successfully registered for ${eventSelected}.`);

  // Reset form
  form.reset();
});

// ----- OPTIONAL: COUNTDOWN TIMER -----
const countdownDate = new Date("December 15, 2025 09:00:00").getTime(); // Set your event date
const countdownElement = document.createElement('div');
countdownElement.style.textAlign = 'center';
countdownElement.style.fontSize = '1.2rem';
document.querySelector('#home').appendChild(countdownElement);

setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `Event starts in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    countdownElement.innerHTML = "The Tech Fest has started!";
  }
}, 1000);
