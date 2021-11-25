let screen = document.getElementById('display');
buttons = document.querySelectorAll('button');
let currentScreenValue = '';
let previousScreenValue = '';
// loop for buttons
for (item of buttons) { 
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            currentScreenValue += buttonText;
            previousScreenValue = currentScreenValue;
            screen.value = previousScreenValue;
        }
        // clear the screen
        else if (buttonText == 'C') {
            currentScreenValue = "";
            screen.value = currentScreenValue;
        }
        // deleting the last text
        else if (buttonText == 'keyboard_backspace') {
            screen.value = screen.value.slice(0, -1);
            currentScreenValue = screen.value;
        }
        else if (buttonText == '=') {
            previousScreenValue = currentScreenValue;
            let x = eval(previousScreenValue);
            screen.value = x;
            currentScreenValue = x;
        }
        else {
            currentScreenValue += buttonText;
            screen.value = currentScreenValue;
        }

    })
}

