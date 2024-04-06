function PerfectNumberCheck(number) {
  let sumDivisors = 0;

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sumDivisors += i;
    }
  }

  return number === sumDivisors;
}

export default PerfectNumberCheck;
