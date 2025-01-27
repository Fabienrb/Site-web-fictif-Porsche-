
// Gestion du thème sombre/clair
const rootElement = document.documentElement;

// Charger le thème sauvegardé
const savedTheme = localStorage.getItem('theme') || 'light';
rootElement.setAttribute('data-theme', savedTheme);

// Basculer entre les thèmes lors d'un clic sur le bouton
document.addEventListener('DOMContentLoaded', () => {
    const switchThemeBtn = document.querySelector('.changeTheme');

    if (switchThemeBtn) {
        switchThemeBtn.addEventListener('click', () => {
            const currentTheme = rootElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            rootElement.setAttribute('data-theme', newTheme);

            // Sauvegarder la préférence dans localStorage
            localStorage.setItem('theme', newTheme);
        });
    }
});