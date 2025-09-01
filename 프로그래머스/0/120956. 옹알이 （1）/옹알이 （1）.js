function solution(babbling) {
  let four = /^(aya|ye|woo|ma)+$/;
  let answer = babbling.filter((v) => four.test(v));
  return answer.length;
}