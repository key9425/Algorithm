function solution(numbers) {
  let num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  for (let i = 0; i <= 10; i++) {
    numbers = numbers.replaceAll(num[i], i);
  }

  return Number(numbers);
}