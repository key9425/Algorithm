function solution(num, total) {
  let n = Math.floor(total / num);
  let answer = [n];

  for (let i = 1; i <= (num - 1) / 2; i++) {
    answer = [n - i, ...answer, n + i];
  }

  return total % num ? [...answer, n + (total % num)] : answer;
}