document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('header nav');

    // Vérifie si les éléments existent avant d'ajouter des écouteurs d'événements
    if (mobileMenuButton && navMenu) {
        mobileMenuButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuButton.classList.toggle('active');
        });

        // Ferme le menu quand un lien est cliqué (pour les navigateurs mobiles)
        const navLinks = document.querySelectorAll('header nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuButton.classList.remove('active');
                }
            });
        });
    }

    // Gestion du formulaire de contact (exemple côté client)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche l'envoi par défaut du formulaire

            // Récupérer les valeurs des champs
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Simple validation (peut être étendue)
            if (!name || !email || !message) {
                alert('Veuillez remplir tous les champs obligatoires (Nom, Email, Message).');
                return;
            }

            // Afficher les données dans la console (pour le développement)
            console.log('Nom:', name);
            console.log('Email:', email);
            console.log('Sujet:', subject);
            console.log('Message:', message);

            // Ici, vous ajouteriez le code pour envoyer les données au serveur
            // (par exemple, avec fetch() à une API ou un service de formulaire)
            // Pour l'instant, nous simulons juste un envoi réussi.

            alert('Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.');

            // Réinitialiser le formulaire après l'envoi
            contactForm.reset();
        });
    }
});