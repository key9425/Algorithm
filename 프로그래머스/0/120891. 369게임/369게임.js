function solution(order) {
  let answer = String(order).match(/[369]/g) || [];
  return answer.length;
}