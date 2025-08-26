function solution(n) {
  let num = Math.sqrt(n);
  return !(num - Math.floor(num)) ? 1 : 2;
}
