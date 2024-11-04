document.addEventListener('DOMContentLoaded', function() {
    const menuBar = document.querySelector('.menu-bar-side');
    const menuButton = document.querySelector('.fa-bars');
    const closeButton = document.querySelector('.fa-remove');
    let isMenuOpen = false;

    function toggleMenu() {
        if (!isMenuOpen) {
            menuBar.classList.add('active');
            menuButton.style.display = 'none';
            closeButton.style.display = 'block';
        } else {
            menuBar.classList.remove('active');
            menuButton.style.display = 'block';
            closeButton.style.display = 'none';
        }
        isMenuOpen = !isMenuOpen;
    }

    menuButton.addEventListener('click', toggleMenu);
    closeButton.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (isMenuOpen && !event.target.closest('nav')) {
            toggleMenu();
        }
    });
});