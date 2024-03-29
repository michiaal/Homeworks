//* Цикли та умови 1 вправа ( Мінімум )

const age = Number(prompt("Скільки вам років?", 0));

if (age && age <= 0) {
  console.log("Введіть вірний номер");
} else {
  switch (true) {
    case age >= 0 && age <= 11:
      console.log("Ви дитина");
      break;

    case age >= 12 && age <= 17:
      console.log("Ви підліток");
      break;

    case age >= 18 && age <= 59:
      console.log("Ви дорослий");
      break;
    case age >= 60:
      console.log("Ви пенсіонер");
      break;
    default:
      new Error("не вірні данні");
  }
}

//* Цикли та умови 2 вправа ( Мінімум )
const numbers = Number(prompt("Число від 0-9 ?", 0));

switch (numbers) {
  case 0:
    alert(' символ - "%"');
    break;
  case 1:
    alert(' символ - "@"');
    break;
  case 2:
    alert(' символ - "!"');
    break;
  case 3:
    alert('символ - "&"');
    break;
  case 4:
    alert(' символ -"$"');
    break;
  case 5:
    alert(' символ - ")"');
    break;
  case 6:
    alert(' символ - "^"');
    break;
  case 7:
    alert('символ - "#"');
    break;
  case 8:
    alert(' символ - "("');
    break;
  case 9:
    alert('Ваш символ - "*"');
    break;
  default:
    alert("Данні не вірні");
}

//* Цикли та умови 3 вправа ( Мінімум )

const number1 = Number(prompt("Номер від ...? "));
const number2 = Number(prompt("Номер до ...? "));
let sum = 0;
for (let i = number1; i <= number2; i++) {
  sum += i;
}
console.log('Сума в діапазоні буде', sum);

//* Цикли та умови 5 вправа ( Мінімум )

const anyNumber = Number(prompt('Число'));
for (let i = 1; i <= anyNumber; i++) {
  if (anyNumber % i === 0) {
    console.log(i);
  }
}

//* Цикли та умови 2 вправа ( Максимум)

for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

//* Цикли та умови 2 вправа ( Норма )

let Sum = Number(prompt(`Cуммf покупки`));

if (Sum > 200 && Sum < 300) {
  Sum -= +(Sum * 0.03).toFixed(2);

  console.log(`знижка -3% ,сума до оплати: ${Sum} `);
} else if (Sum >= 300 && Sum < 500) {
  Sum -= +(Sum * 0.05).toFixed(2);

  console.log(`знижка - 5% , сума до оплати: ${Sum}`);
} else if (Sum >= 500) {
  Sum -= +(Sum * 0.07).toFixed(2);

  console.log(`знижка - 7% ,сума до оплати: ${Sum}`);
} else if (Sum < 200) {
  console.log(`Без знижки,сума до оплати: ${Sum}`);
}

//* Цикли та умови 3 вправа ( Норма )

let positiveNumbers = 0;
let negativeNumbers = 0;
let zero = 0;
let evenNumbers = 0;
let oddNumbers = 0;
for (let i = 0; i < 10; i++) {
  let input = Number(prompt("Введіть 10 чисел"));
  if (input > 0) {
    positiveNumbers += 1;
  } else if (input < 1) {
    negativeNumbers += 1;
  } else {
    zero += 1;
  }
  if (input % 2 == 0 && input !== 0) {
    evenNumbers += 1;
  } else if (input !== 0) {
    oddNumbers += 1;
  }
}
console.log(
  `Ви маєте ${positiveNumbers} додатніх, ${negativeNumbers} від'ємних, ${zero} нулів, ${evenNumbers} парних і ${oddNumbers} непарних`
);

//* Цикли та умови 4 вправа ( Норма )

const day = true;
while (day) {
  if (!confirm("Понеділок, хочеш побачити наступний день ?")) break;
  else if (!confirm("Вівторок, хочеш побачити наступний день ?")) break;
  else if (!confirm("Середа, хочеш побачити наступний день ?")) break;
  else if (!confirm("Четвер, хочеш побачити наступний день ?")) break;
  else if (!confirm("П'ятниця, хочеш побачити наступний день ?")) break;
  else if (!confirm("Субота, хочеш побачити наступний день ?")) break;
  else if (!confirm("Неділя, хочеш побачити наступний день ?")) break;
}

//* Цикли та умови 1 вправа ( Максимум )

let min = 0;
let max = 100;
let action;

let number = Number(prompt("Введіть число від 0 до 100"));

while (true) {
  action = Math.trunc((min + max) / 2);

  let input = prompt(
    `ТВій номер > ${action}, < ${action}, = ${action}? введи '>', '<', or '='. `
  );

  if (input === ">") {
    min = action + 1;
  } else if (input === "<") {
    max = action - 1;
  } else if (input === "=") {
    alert(`твій номер ${action}!`);
    break;
  } else {
    alert("Введи '>' or '<' or '='.");
  }

  if (!number) {
    break;
  }
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};