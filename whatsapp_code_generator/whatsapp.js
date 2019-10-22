const tel = document.getElementById('input-tel');
const message = document.getElementById('input-message').value;
const 

const generator = document.getElementById('btn-generator');
const code = document.getElementById('code');

generator.addEventListener('click', () => {
    code.innerHTML = `https://api.whatsapp.com/send?phone=${tel.value}&text=${message}`
});