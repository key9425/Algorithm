function solution(n) {
  let answer = new Set();

  for (let i = 2; i <= n; i++) {
    if (n === 0) break;

    while (n % i === 0) {
      answer.add(i);
      n /= i;
    }
  }

  return [...answer];
}
