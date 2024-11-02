const hamMenu = document.getElementById("bar");
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    offScreenMenu.classList.toggle('action');
});
