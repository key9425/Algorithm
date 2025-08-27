function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (!(n % i)) {
      if (i === n / i) {
        return answer * 2 + 1;
      } else if (i > n / i) {
        return answer * 2;
      }

      answer++;
    }
  }
}