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

//* Таюлиця множення
// const input = Number(prompt(" Введіть число"));

// if (!isNaN(input) && input >= 2 && input <=9 ) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(` ${input} *  ${i} =  ${input * i} `);
//   }
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

// const arr = ["a", 12, true, [], {}];

// const updatedList = arr.map((item, index) => {
//   if (typeof item === "string") {
//     return item.toUpperCase();
//   }
//   return item;
// });
// console.log(arr);



// //* Об'єкти ( Мінімум )

// let car = {
//   producer: "Honda",
//   model: "Acord",
//   yearOfProduction: 2005,
//   averageSpeed: 100,
//   tankVolume: 50,
//   fuelConsumption: 10,
//   driver1: "Mark",
//   driver2: "Roma",
//   driver3: "Vika",
// };
// console.log("Інформація про автомобіль", car);

// car.newDriver = "Maria";

// const key = prompt("Яке ім'я водія ?");
// const value = car[key];
// if (value) {
//   console.log(value);
// } else {
//   console.log("Водія не знайдено");
// }
// const distance = Number(prompt("Яка відстань"));

// let time = distance / car.averageSpeed;
// let breaks = Math.ceil(time / 4);
// let travelTime = time + breaks;

// let consumption = (distance / 100) * car.fuelConsumption;

// console.log(`Час подорожі: ${travelTime} `);
// console.log(`Кількість палива: ${consumption} л.`);

// //* Функції ( мінімум )

// вправа 2

// function allArguments() {
//   console.log(arguments.length);
// }
// allArguments();
// export default allArguments;



// вправа 3

// const numberCompare = (a, b) => {

//   if (a > b) {
//     console.log('-1');
//   } else if (a < b) {
//     console.log('+1');
//   } else {
//     console.log('0');
//   }
// };

// numberCompare(7, 6);

// вправа 4

// function calcFactorial(userNumber) {
//   if (isNaN(userNumber)) {
//     throw new Error('Wrong data');
//   } else if (userNumber !== 1) {
//     return userNumber * calcFactorial(userNumber - 1);
//   } else {
//     return 1;
//   }
// }

// console.log(calcFactorial(5));

// // вправа 5

// function oneNumber() {
//   const firstNumber = Number(prompt('Введіть перше число'));
//   const secondNumber = Number(prompt('Введіть друге число'));
//   const thirdNumber = Number(prompt('Введіть третє число'));
//   if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
//     console.log('Будь ласка, введіть числа.');
//     return;
//   }
//   const oneNumber = Number(`${firstNumber}${secondNumber}${thirdNumber}`);
//   console.log(oneNumber);
// }

// oneNumber();


// // вправа 1 ( норма )
// function PerfectNumberCheck(number) {
//   let sumDivisors = 0;

//   for (let i = 1; i < number; i++) {
//     if (number % i === 0) {
//       sumDivisors += i;
//     }
//   }

//   return number === sumDivisors;
// }

// console.log(PerfectNumberCheck(28));

// export default checkPerfectNumber;

