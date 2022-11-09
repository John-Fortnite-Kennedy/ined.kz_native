var buttons = document.querySelectorAll('.menu');
function myFunction(){
    var nav = document.querySelector('#nav');
    nav.classList.toggle("expanded");
};
buttons.forEach(el => el.addEventListener('click',() => { myFunction(); }));