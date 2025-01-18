const menuIcon = document.querySelector('.menu-icon');
const menuContent = document.querySelector('.menu-content');

menuIcon.addEventListener('click', () => {
    menuContent.style.display = menuContent.style.display === 'none' || menuContent.style.display === '' ? 'flex' : 'none';
});
