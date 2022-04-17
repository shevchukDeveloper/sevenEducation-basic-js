'use strict';
    let userName = prompt("Введіть ім'я");
    let userSecondName = prompt("Введіть прізвище");
    let userAge = prompt("Введіть ваш вік");
document.write(`
<div class="wrapper">
      <header class="header">header 800*200</header>
      <aside class="aside">nav 100*400</aside>
      <main class="main">section 700*400
       <div>
 <ul>
 Данні про користувача :
<li>Ім'я: ${userName}</li>
<li>Прізвище: ${userSecondName}</li>
<li>Вік: ${userAge}</li>
 </ul>
 </div>
      </main>
      <footer class="footer">footer 800 *200</footer>
    </div>
`);

 let firstNumber = +prompt("Введіть перше число");
 let secondNumber = +prompt("Введіть друге число");
 let lastNumber = +prompt("Введіть останне число");
//  отримуєм доступ до дом елементу
 let footer = document.querySelector('.footer');
// обчислюємо дані
let result = (firstNumber + secondNumber + lastNumber) / 3;
//  виводим дані 
footer.innerHTML =
    `
     <div>
    Середне арифметичне число : ${result}
     </div>
     `;
