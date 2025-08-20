function solution(n) {
  if (n % 2) {
    n -= 1;
  }

  let count = n / 2;
  let answer = ((n + 2) * count) / 2;
  return answer;
}
