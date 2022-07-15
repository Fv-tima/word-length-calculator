let btn = document.getElementById('btn');
let output = document.getElementById('output');
btn.addEventListener('click', submit);
function submit(e) {
 e.preventDefault;
 let letters = document.getElementById('word').value;
 output.innerHTML = letters.length;
};