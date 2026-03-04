document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    // pour ajouter la classe visible après un court délai
    setTimeout(() => {
        fadeInElements.forEach(el => el.classList.add('visible'));
    }, 300);
});
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // On observe tous les éléments qui ont la classe fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.15 // Déclenche l'animation quand 15% de la section est visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionnel : on peut arrêter d'observer une fois l'animation jouée
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // On observe toutes les balises section et le header hero
    document.querySelectorAll('section, header').forEach(section => {
        observer.observe(section);
    });
});