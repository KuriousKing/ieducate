burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightNav = document.querySelector('.rightNav');
list = document.querySelector('.list');

burger.addEventListener('click', () => {
    navbar.classList.toggle('hResp');
    rightNav.classList.toggle('vResp');
    list.classList.toggle('vResp');
})