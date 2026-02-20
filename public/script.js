document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    // pour ajouter la classe visible après un court délai
    setTimeout(() => {
        fadeInElements.forEach(el => el.classList.add('visible'));
    }, 300);
});