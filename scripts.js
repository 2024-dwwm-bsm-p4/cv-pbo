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


if (window.innerWidth >= 768) {
    const retourTopDroite = document.getElementById('retour-top-droite',);
    const retourTopGauche = document.getElementById('retour-top-gauche',);

    function retourTop(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
// Ajoute un écouteur d'événement au bouton
retourTopDroite.addEventListener('click', retourTop);
retourTopGauche.addEventListener('click', retourTop);


