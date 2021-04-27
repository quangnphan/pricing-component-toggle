const toggle = document.getElementById('checkbox');
const price = document.getElementById('option');

toggle.addEventListener('change', ()=>{
    price.classList.toggle('show-monthly');
})