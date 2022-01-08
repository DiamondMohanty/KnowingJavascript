const colors = ['red', 'green', 'purple',  'rgb(245, 234, 210)', '#F4F3F9']

let button = document.getElementById('btn');
let body = document.body;
let span = document.querySelector('.color');
button.addEventListener('click', () => {
    let idx  = getRandomNumber(colors.length);
    body.style.backgroundColor = colors[idx];
    span.textContent = colors[idx];
});

function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit)
}