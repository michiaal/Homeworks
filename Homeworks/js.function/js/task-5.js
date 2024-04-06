function oneNumber() {
  const firstNumber = Number(prompt("Введіть перше число"));
  const secondNumber = Number(prompt("Введіть друге число"));
  const thirdNumber = Number(prompt("Введіть третє число"));
  if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
    console.log("Будь ласка, введіть числа.");
    return;
  }
  const oneNumber = Number(`${firstNumber}${secondNumber}${thirdNumber}`);
  console.log(oneNumber);
}

export default oneNumber;
