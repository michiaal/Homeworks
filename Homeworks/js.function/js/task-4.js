function calcFactorial(userNumber) {
  if (isNaN(userNumber)) {
    throw new Error("Wrong data");
  } else if (userNumber !== 1) {
    return userNumber * calcFactorial(userNumber - 1);
  } else {
    return 1;
  }
}

export default calcFactorial;
