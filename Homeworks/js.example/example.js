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

// //* Об'єкти ( Норма )

const time = {
  seconds: 3,
  minutes: 24,
  hours: 47,
  changeSeconds: function (userSeconds) {
    this.seconds = (userSeconds % 60) + this.seconds;
    if (this.seconds + userSeconds >= 60) {
      this.minutes += Math.floor(userSeconds / 60);
      if (this.seconds >= 60) {
        this.seconds -= 60 * Math.floor(userSeconds / 60);
      }
    }
  },
  changeMinutes: function (userMinutes) {
    this.minutes = (userMinutes % 60) + this.minutes;
    if (this.minutes + userMinutes >= 60) {
      this.hours += Math.floor(userMinutes / 60);
      if (this.minutes >= 60) {
        this.minutes -= 60 * Math.floor(userMinutes / 60);
      }
    }
  },
  changeHours: function (userHours) {
    this.hours += userHours;
  },

  showTime: function () {
    Object.keys(this).forEach((key) => {
      if (typeof this[key] !== "function") {
        console.log(`${key}: ${this[key]}`);
      }
    });
  },
};

time.changeSeconds(10);
time.changeMinutes(100);
time.changeHours(11);
time.showTime();
