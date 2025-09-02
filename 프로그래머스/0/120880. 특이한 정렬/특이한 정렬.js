function solution(numlist, n) {
  return numlist.sort((num1, num2) => num2 - num1).sort((num1, num2) => Math.abs(num1 - n) - Math.abs(num2 - n));
}