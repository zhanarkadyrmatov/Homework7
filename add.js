// Скрипт запрашивает ввести букву русского алфавита. Скрипт должен вывести сообщение
// какая эта буква - гласная или согласная

// let word = prompt("Тамга жазыныз?");

// while (true) {
//   if (
//     word === "а" ||
//     word === "А" ||
//     word === "О" ||
//     word === "о" ||
//     word === "У" ||
//     word === "у" ||
//     word === "ы" ||
//     word === "Ы" ||
//     word === "э" ||
//     word === "Э" ||
//     word === "и" ||
//     word === "И" ||
//     word === "Е" ||
//     word === "е" ||
//     word === "Ё" ||
//     word === "ё" ||
//     word === "Я" ||
//     word === "я" ||
//     word === "Ю" ||
//     word === "ю"
//   ) {
//     alert(`${word} ундуу тамга`);
//     break;
//   } else {
//     alert(`${word} унсуз тамга`);
//     break;
//   }
// }

// “Калькулятор” - пользователь вводит с клавиатуры число, символ арифметического
// действия (+, -, *, /) и еще одно число, Скрипт должен вывести результат

// let sum = +prompt("Биринчи санды жазыныз?");
// let sum1 = prompt("Озунузго кереттуу белгини жазыныз: ( + ,  - ,  * ,  / )");
// let sum2 = +prompt("Экинчи санды жазыныз");

// function myNumber() {
//   if (sum1 === "+") {
//     return sum + sum2;
//   } else if (sum1 === "-") {
//     return sum - sum2;
//   } else if (sum1 === "*") {
//     return sum * sum2;
//   } else if (sum1 === "/") {
//     return sum / sum2;
//   } else {
//     console.log("Сан жазыныз");
//   }
// }
// alert(`Резултат: ${sum} ${sum1} ${sum2} = ${myNumber()}`);

// Вывести в консоль все возможные сочетания из двух цифр - первая цифра может быть любой
// от 3 до 8, вторая любой от 0 до 7. Пример: 36, 44, 80 и т.д

// let numberOne = [3, 4, 5, 6, 7, 8];
// let numberTwo = [0, 1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < numberOne.length; i++) {
//   for (let j = 0; j < numberTwo.length; j++) {
//     console.log(`${numberOne[i]}${numberTwo[j]}`);
//   }
// }

// практика
// let number;
// function getRandom(min, max) {
//   number = Math.ceil(Math.random() * (max - min) + min);
//   return number;
// }
// console.log(getRandom(3, 8));

// let number2;
// function getRandom2(min, max) {
//   number2 = Math.ceil(Math.random() * (max - min) + min);
//   return number2;
// }
// console.log(getRandom2(0, 7));

// console.log(`${number}${number2}`);
