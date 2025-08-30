function solution(n) {
  let nums = new Set();

  for (let i = 2; i <= n / 2; i++) {
    for (let j = 2; i * j <= n; j++) nums.add(i * j);
  }

  return nums.size;
}
