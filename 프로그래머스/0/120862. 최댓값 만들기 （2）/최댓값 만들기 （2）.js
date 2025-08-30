function solution(numbers) {
  let new_numbers = [...numbers].sort((a, b) => a - b);
  let num1 = new_numbers[0] * new_numbers[1];
  let num2 = new_numbers[new_numbers.length - 1] * new_numbers[new_numbers.length - 2];
  return Math.abs(num1) > Math.abs(num2) ? num1 : num2;
}