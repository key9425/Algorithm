function solution(numbers) {
  let answer = numbers.reduce((total, num) => total + num, 0) / numbers.length;
  return answer;
}
