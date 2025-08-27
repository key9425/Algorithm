function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    while (!((i + count) % 3) || (i + count).toString().includes(3)) {
      count++;
    }
  }
  return n + count;
}
