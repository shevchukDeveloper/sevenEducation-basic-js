'use strict';
// отримуєм всі кнопки за тегом  
const allBtn = document.querySelectorAll('button');

function firstTask() {
    let userNumber = parseInt(prompt("Введіть число"));
    if (userNumber === 10) {
        return alert('Вірно');
    }
    alert('Невірно');
}

function secondTask() {
    let timeNumber = parseInt(prompt("Введіть число від 0 до 59"));
    if (timeNumber >= 0 && timeNumber <= 14) {
        alert('Ви вказали першу половину часу');
    } else if (timeNumber >= 15 && timeNumber <= 30) {
        alert('Ви вказали другу половину часу');
    } else if (timeNumber >= 31 && timeNumber <= 45) {
        alert('Ви вказали третю половину часу');
    } else if (timeNumber >= 46 && timeNumber <= 59) {
        alert('Ви вказали четверту половину часу');
    } else {
        // примітивна валідація
        alert('Ви вказали дані позамежами від 0 до 59 або щось інше');
    }
}

function lastTask() {
    let seasonNumber = parseInt(prompt('Введіть число від 1 до 4'));
    let result;
    if (seasonNumber === 1) {
        result = 'Зима';
    } else if (seasonNumber === 2) {
        result = 'Весна';
    } else if (seasonNumber === 3) {
        result = 'Літо';
    } else if (seasonNumber === 4) {
        result = 'Осінь';
    } else {
        // примітивна валідація
        result = 'Ви намагаетесь обійти систему , спробуйте ще';
    }
    alert(result);
}
//вішаємо слухача на body
document.body.addEventListener('click', (e) => {
    // вказуєм умови при яких він відпрацьовує
switch (e.target.id) {
    case 'task1':
        firstTask();
        break;
    
    case 'task2':
        secondTask();
        break;
    
    case 'task3':
        lastTask();
        break;
    
    default:
        break;
}
})
