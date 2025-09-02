function solution(n) {
  let answer = 0;

  if (n % 2) {
    for (let i = n; i > 0; i -= 2) {
      answer += i;
    }
  } else {
    for (let i = n; i > 0; i -= 2) {
      answer += i * i;
    }
  }

  return answer;
}
