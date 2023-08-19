let target = document.getElementById('txt01');
let span = document.getElementById('display');
//target.innerText = document.text01.value;


target.addEventListener('blur', function() {
    span.innerHTML = target.value;
    span.classList.remove('hidden');
});