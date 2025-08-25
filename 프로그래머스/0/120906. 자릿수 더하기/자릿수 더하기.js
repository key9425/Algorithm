function solution(n) {
  return [...String(n)].reduce((result, n) => result + Number(n), 0);
}
