const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

const typed = new Typed('.multiple', {
    strings: ['Web Developer', 'Freelancer', 'Strategic Marketing Mananger'],
    typeSpeed:100, 
    backSpeed:100,
    backDelay:1000,
    loop: true
});