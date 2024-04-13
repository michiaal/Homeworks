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

//* Цикли
// While

// let count = 0;
// do {
//   console.log(count);
//   count++
// }while (count < 10) {
// }


// For

// for (let i=0 ; i < 4; i++){
//   alert(i)
// }

// .elemet-first {
//   background-color: rgb(252, 5, 5);
//   border-radius: 50%;
//   min-height: 50px;
//   width: 100%;
//   max-width: 50px;
// }
// .elemet-second {
//   background-color: rgb(229, 255, 0);
//   border-radius: 50%;
//   min-height: 50px;
//   width: 100%;
//   max-width: 50px;
// }

// .elemet-thirt {
//   background-color: rgb(6, 172, 0);
//   border-radius: 50%;
//   min-height: 50px;
//   width: 100%;
//   max-width: 50px;
// }

// /* bottom */

// .button {
//   background-color: white;
//   padding-right: 25px;
//   border-radius: 4px;
//   padding-left: 25px;
//   font-weight: 800;
//   cursor: pointer;
//   height: 45px;
//   font-size: 24px;
// }

// .ligt-box-item {
//   padding-top: 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
// }

// .light-box {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   max-width: 60px;
//   width: 100%;
//   min-height: 200px;
//   background-color: #000;
//   gap: 10px;
// }

