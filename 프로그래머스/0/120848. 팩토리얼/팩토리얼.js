function solution(n) {
  let factorial = 1;
  let num = 1;

  while (factorial <= n) {
    num++;
    factorial *= num;
  }

  return num - 1;
}
