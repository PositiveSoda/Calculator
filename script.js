const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C'){
            currentInput = '';
            display.textContent = '0';
        }
        else if (value === '='){
            if (currentInput === '5+5'){
                display.textContent = 'Hello World';
                currentInput = '';
            } else {
                try {
                currentInput = eval(currentInput).toString();
                display.textContent = currentInput;
            } catch {
                display.textContent = 'Errore'; 
                currentInput = '';
            }

            }
            
        }
        else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});






