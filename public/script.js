const uptitle = document.querySelector('#signup-title');
const upform = document.querySelector('#signup-form');
const upbutton = document.querySelector('#signup-btn');

const intitle = document.querySelector('#signin-title');
const inform = document.querySelector('#signin-form');
const inbutton = document.querySelector('#signin-btn');

inbutton.addEventListener('click', ()=>{
    uptitle.classList.toggle('hidden');
    upform.classList.toggle('hidden');
    intitle.classList.toggle('hidden');
    inform.classList.toggle('hidden');
})

upbutton.addEventListener('click', ()=>{
    uptitle.classList.toggle('hidden');
    upform.classList.toggle('hidden');
    intitle.classList.toggle('hidden');
    inform.classList.toggle('hidden');
})