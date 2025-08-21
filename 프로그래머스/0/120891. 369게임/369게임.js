function solution(order) {
  let new_order = String(order).replace(/[369]/g, "");
  let answer = String(order).length - new_order.length;
  return answer;
}