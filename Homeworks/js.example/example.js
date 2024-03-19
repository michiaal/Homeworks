/* Тут об'єднали все в 1 умову. console.log запрацює якщо birthYear являється числом і якщо не дорівнює NaN (isNaN(birthYear)). 
Якщо ліва і права частина буде рівна true */

// const birthYear = +prompt('введіть рік народження');

// if (typeof birthYear === 'number' && !isNaN(birthYear)) {
//   console.log(2024 - birthYear);
// }

/*console.log запрацює якщо birthYear являється числом і якщо не дорівнює NaN (isNaN(birthYear)). 
Якщо ліва і права частина буде рівна true */

// Запрацює якщо всі умови && будуть виконані

// const motherSuccess = false;
// const fatherSuccess = true;
// const otherSuccess = false;

// if (motherSuccess || fatherSuccess || otherSuccess) {
//   console.log('Show film');
// }

//* перевірка в або ( || ) йде поступово від пачатку. Якщо перше значення підходить то ініш не перевіряються.
// тут може бути хоча б одно умова завдяки   ( || )
// приклад

// const motherSuccess = true;
// const fatherSuccess = true;
// const otherSuccess = true;

// if (motherSuccess && fatherSuccess && otherSuccess) {

//   console.log('Show film');

// }

// for (let index = 0 ; index < Array.length; index++) {
//   const element = array[index]
// }

// //* Типи данних 1 вправа
// let sum = 0.1 + 0.2;
// console.log(+sum.toFixed(2));

// //* Типи данних 2 вправа
// let first = 1;
// let second = "1";
// let suma = 1 + +"1";
// console.log(suma);

// //* Типи данних 3 вправа

// const file = Number("0.82");
// let amount = +prompt("Який обсяг пам'яті ?");
// let filenumber = Number(file * amount);
// let result = alert(`Поміщається: ${Math.ceil(+filenumber)} файлів`);
// console.log(result);

// //* Типи данних 4 вправа

// let money = Number(prompt("Скільки грошей ?"));
// let сhoco = Number(prompt("Яка вартість ?"));
// let action = alert(`Можеш купити ${Math.trunc(money / сhoco)} шоколадок`);

// let action2 = alert (`Залишиться ${money % сhoco} грн`);

// //* Типи данних 5 вправа
//* Запитай у користувача тризначне число і виведи його задом наперед. 
//* Для вирішення завдання тобі знадобиться оператор % (залишок від ділення)Не можу зрозуміти як застосувати % . 
//* В інтернеті є інше рішення але не бачу сенсу копіювати.


// //* Типи данних 6 вправа

let sum = Number(prompt('Сума вкладу'));
let percent = 0.05 / 12 ;
let overall = sum * percent * 2  
let greeting = alert(`Вам нараховано ${(+overall.toFixed(2))} відсотки`);
console.log(+overall.toFixed(2))