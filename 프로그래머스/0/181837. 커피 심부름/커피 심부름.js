function solution(order) {
  return order.reduce((total, value) => (value.includes("cafelatte") ? total + 5000 : total + 4500), 0);
}
