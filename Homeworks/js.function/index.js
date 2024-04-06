import allArguments from "./js/task-2.js";
import returnedNumber from "./js/task-3.js";
import calcFactorial from "./js/task-4.js";
import oneNumber from "./js/task-5.js";
import PerfectNumberCheck from "./js/task-6.js";

//* Initialize

// Створи функцію, яка буде виводити кількість переданих їй аргументів.

allArguments(10, 4, 5, 5);

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.

returnedNumber(6, 5);

// Напиши функцію, яка обчислює факторіал переданого їй числа.

console.log(calcFactorial(4));

//Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

oneNumber();

// Норма
//Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

console.log(PerfectNumberCheck(28));
