function pecati() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let country = document.getElementById("country").value;
    let checkedMale = document.getElementById("male");
    let checkedFemale = document.getElementById("female");
    let result = `I'm ${firstName} ${lastName}, I'm ${age} years, I come from ${country}`;
    if (checkedMale.checked === true) {
        document.getElementById("poraka").innerHTML = `${result} and I'm ${male.value}`;
    }
    else {
        document.getElementById("poraka").innerHTML = `${result} and I'm ${female.value}`;
    }
};

function calculate() {
    let firstNumber = parseFloat(document.getElementById("firstNumber").value);
    let secondNumber = parseFloat(document.getElementById("secondNumber").value);
    let mathSymbols = document.getElementById("mathSymbols").value;
    switch (mathSymbols) {
        case '+':
            result = firstNumber + secondNumber;
            document.getElementById("resultOfCalculating").innerHTML = result;
            break;
        case '-':
            result = firstNumber - secondNumber;
            document.getElementById("resultOfCalculating").innerHTML = result;
            break;
        case '*':
            result = firstNumber * secondNumber;
            document.getElementById("resultOfCalculating").innerHTML = result.toFixed(4);
            break;
        case '/':
            result = firstNumber / secondNumber;
            document.getElementById("resultOfCalculating").innerHTML = result.toFixed(4);//go koristev toFixed za da go svedi brojot na 4 decimali
            break;
        default:
            document.getElementById("resultOfCalculating").innerHTML = 'Invalid operator';
    }
};

function calculate1() {
    let number1 = parseFloat(document.getElementById("num1").value);
    let number2 = parseFloat(document.getElementById("num2").value);
    let symbol = document.getElementById("symbol");
    switch (symbol.value) {
        case '+':
            result1 = number1 + number2;
            document.getElementById("resultOf").innerHTML = result1;
            break;
        case '-':
            result1 = number1 - number2;
            document.getElementById("resultOf").innerHTML = result1;
            break;
        case '*':
            result1 = number1 * number2;
            document.getElementById("resultOf").innerHTML = result1.toFixed(4);
            break;
        case '/':
            result1 = number1 / number2;
            document.getElementById("resultOf").innerHTML = result1.toFixed(4);// isto i tuka
            break;
        default:
            document.getElementById("resultOf").innerHTML = 'Invalid operator';
    }
};