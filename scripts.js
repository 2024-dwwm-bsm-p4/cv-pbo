//-----------------------------script flip carte------------------------------------------

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
  

// ----------------------------script bouton mode sombre---------------------------------------


const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Vérifier si le mode sombre est déjà activé dans localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

// Écouter les clics sur le bouton pour basculer entre les modes
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Sauvegarder le thème dans localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// -------------------------------script bouton ancre-------------------------------


document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth >= 768) {  
        const retourTopButton = document.getElementById('retour-top'); // Renommé pour éviter le conflit      

        if (retourTopButton) {  // Vérifie si l'élément existe
            function scrollToTop(event) {
                event.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }

            // Ajoute un écouteur d'événement au bouton
            retourTopButton.addEventListener('click', scrollToTop);            
        }
    }
});




