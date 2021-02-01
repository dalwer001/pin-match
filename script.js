function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    }
    else {
        console.log('shorter', pin);
        return getPin();
    }
}

// display generated pin
function generatePin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}

//handle calculator button event
const buttonHandler = document.getElementById('digit-handler');
buttonHandler.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        //handle backspace;
        //handle clear;
        if (digit === 'C') {
            const typedInput = document.getElementById('typed-pin');
            typedInput.value = '';
        }
    }
    else {
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
})
// verify the pin
function verifyPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if (pin == typedPin) {
        display('block','none');
    }
    else {
        display('none','block');
    }
}
// display correct pin or wrong pin
function display(correctStatus, inCorrectStatus) {
    const correct = document.getElementById('correct-pin');
    correct.style.display = correctStatus;
    const inCorrect = document.getElementById('incorrect-pin');
    inCorrect.style.display = inCorrectStatus;
}