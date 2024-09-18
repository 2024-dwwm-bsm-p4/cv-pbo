//-----------------------------flip card script------------------------------------------

function flipCard(card) {
  if (window.innerWidth >= 1024) {
    card.querySelector('.card-inner').classList.toggle('is-flipped');
  }     
} 

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.card').forEach(card => {
    if (window.innerWidth < 1024) {
      card.classList.add('no-flip');
    }
  });
});

// ----------------------------dark mode button script---------------------------------------

const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check if dark mode is already enabled in localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

// Listen for clicks on the button to toggle between modes
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Save the theme in localStorage
  if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
  } else {
      localStorage.setItem('theme', 'light');
  }
});

// -------------------------------anchor button script-------------------------------

document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth >= 768) {  
      const retourTopButton = document.getElementById('retour-top'); // Renamed to avoid conflict      

      if (retourTopButton) {  // Check if the element exists
          function scrollToTop(event) {
              event.preventDefault();
              window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
              });
          }

          // Add an event listener to the button
          retourTopButton.addEventListener('click', scrollToTop);            
      }
  }
});
