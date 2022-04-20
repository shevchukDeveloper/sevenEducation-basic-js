'use strict';
let userFirstNumber = parseInt(prompt('Введіть перше число'));
let userSecondNumber = parseInt(prompt('Введіть друге число'));
let userSign = prompt('Введіть один із операторів: /,*,-,+');
let result;
function calc(firstNumber, secondNumber, sign) {
    
    switch (sign) {
        case '+':
          result =  firstNumber + secondNumber
            break;
        case '-':
          result =  firstNumber - secondNumber
            break;
        case '*':
          result =  firstNumber * secondNumber
            break;
        case '/':
          result =  firstNumber / secondNumber
            break;
    
        default:
            break;
    }
console.log(`Результат вашого обчислення ${firstNumber} ${sign} ${secondNumber} = ${result}`);
}
calc(userFirstNumber, userSecondNumber, userSign)
