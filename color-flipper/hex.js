let button = document.getElementById('btn');
let span = document.querySelector('.color')
let hexCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

button.addEventListener('click', () => {
    let colorCode = '#';

    while (colorCode.length != 7) {
        colorCode += hexCodes[getRandomNumber(hexCodes.length)];
    }

    document.body.style.backgroundColor = colorCode;
    span.textContent = colorCode;
});

function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit)
}