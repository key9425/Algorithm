function solution(a, d, included) {
  return included.reduce((result, boolean, i) => (boolean ? result + (a + d * i) : result), 0);
}
