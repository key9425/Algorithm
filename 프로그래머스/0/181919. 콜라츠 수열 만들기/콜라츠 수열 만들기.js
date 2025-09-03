function solution(n) {
  let answer = [];

  while (n > 1) {
    answer.push(n);
    n = n % 2 ? 3 * n + 1 : n / 2;
  }
  answer.push(1);

  return answer;
}