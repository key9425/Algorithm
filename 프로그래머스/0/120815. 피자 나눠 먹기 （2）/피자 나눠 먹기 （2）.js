function solution(n) {
  let arr = [6, 3, 2, 1];

  for (const i of arr) {
    if (!(n % i)) {
      return n / i;
    }
  }
}
