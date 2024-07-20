const buttons = document.getElementsByTagName('button');
const displayValue = document.querySelector('.actual-value');
const backSpace = document.querySelector('.backspace');

const getResult = (operation) => {
    let result;

    try {
        result = eval(operation);
    } catch (error) {
        result = 'Syntax ERROR';
        displayValue.textContent = result;
        return;
    }

    displayValue.textContent = result;
    pendingOperation = result;
    return;
}

const cleanValues = () => {
    displayValue.textContent = pendingOperation = '';
}

let pendingOperation = '';

for (let n = 0; n < buttons.length; n++) {
    buttons[n].addEventListener('click', (e) => {
        if (e.target.id === '=') {
            for (let j = 0; j < pendingOperation.length; j++) {
                if (pendingOperation[j] === 'x') {
                    pendingOperation = pendingOperation.replace('x', '*');
                    getResult(pendingOperation);
                } else {
                    if (pendingOperation[j] === '÷') {
                        pendingOperation = pendingOperation.replace('÷', '/');
                        getResult(pendingOperation);
                    }
                }
            }

            getResult(pendingOperation);
            return;
        }

        displayValue.textContent = pendingOperation += e.target.id;
    });
}

backSpace.addEventListener('click', cleanValues);
