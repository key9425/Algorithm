function solution(a, b) {
  const getGCD = (a, b) => {
    return !b ? a : getGCD(b, a % b);
  };

  let gcd = getGCD(a, b);
  let num = b / gcd;

  while (!(num % 2)) {
    num /= 2;
  }
  while (!(num % 5)) {
    num /= 5;
  }

  return num === 1 ? 1 : 2;
}
