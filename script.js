function screenColor() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const display = document.getElementById("display");

function displayFunc(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculateAll() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Syntax Error";
    }
}