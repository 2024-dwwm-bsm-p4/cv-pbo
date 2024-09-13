
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

