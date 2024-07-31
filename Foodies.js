document.addEventListener("DOMContentLoaded", function() {
  // Set the current date
  const currentDateElement = document.getElementById("current-date");
  const calendarElement = document.getElementById("calendar");
  const now = new Date();
  const formattedDate = now.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  });
  currentDateElement.textContent = formattedDate;

  // Set the calendar to today's date
  const today = now.toISOString().split('T')[0];
  calendarElement.value = today;

  // Quotes functionality
  const quotes = [
        "Good food is the foundation of genuine happiness.",
        "One cannot think well, love well, sleep well, if one has not dined well.",
        "Food is symbolic of love when words are inadequate.",
        "We all eat, and it would be a sad waste of opportunity to eat badly.",
        "Life is uncertain. Eat dessert first.",
        "People who love to eat are always the best people.",
        "A recipe has no soul. You, as the cook, must bring soul to the recipe.",
        "There is no sincere love than the love of food.",
        "Food is our common ground, a universal experience.",
        "To eat is a necessity, but to eat intelligently is an art."
  ];
  let currentQuoteIndex = 0;
  const quoteElement = document.getElementById("quote");
  
  function updateQuote() {
      quoteElement.textContent = quotes[currentQuoteIndex];
  }

  document.getElementById("prev-quote").addEventListener("click", function() {
      currentQuoteIndex = (currentQuoteIndex === 0) ? quotes.length - 1 : currentQuoteIndex - 1;
      updateQuote();
  });

  document.getElementById("next-quote").addEventListener("click", function() {
      currentQuoteIndex = (currentQuoteIndex === quotes.length - 1) ? 0 : currentQuoteIndex + 1;
      updateQuote();
  });

  setInterval(function() {
      currentQuoteIndex = (currentQuoteIndex === quotes.length - 1) ? 0 : currentQuoteIndex + 1;
      updateQuote();
  }, 15000); // Change quote every 15 seconds

  // Initialize the first quote
  updateQuote();

  
});


document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.login-btn');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-content').forEach(function(content) {
                content.style.display = 'none';
            });
        }
    });

    document.querySelector('.navbar').addEventListener('click', function(e) {
        navLinks.classList.toggle('active');
    });
});


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    alert(`Login form submitted.\nEmail: ${email}\nPassword: ${password}`);
});