document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const value = button.textContent;

            if (value === 'C') {
                currentInput = '';
            } else if (value === '=') {
                try {
                    currentInput = eval(currentInput);
                } catch (error) {
                    currentInput = 'Error';
                }
            } else {
                currentInput += value;
            }

            display.value = currentInput;
        });
    });
});
