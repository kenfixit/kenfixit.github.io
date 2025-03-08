document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => link.style.color = '#00adb5');
        link.addEventListener('mouseout', () => link.style.color = '');
    });

    const heroBtn = document.querySelector('.hero .btn');
    heroBtn.addEventListener('click', () => alert('Let\'s explore!'));
});
