let currentValue = 0;
const value = document.getElementById('counter-val');
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', element => {
        const action = element.currentTarget.classList[1];
        
        switch (action) {
            case 'decrease': 
                currentValue -= 1;
                break;
            case 'increase':
                currentValue += 1;
                break;
            default:
                currentValue = 0;    
        }
        value.textContent = currentValue;
        setColor();
    });
});

function setColor() {
    let color = 'black';
    if (currentValue == 0) {
        color = 'black';
    } else if (currentValue > 0) {
        color = 'green';
    } else {
        color = 'red';
    }
    value.style.color = color;
}