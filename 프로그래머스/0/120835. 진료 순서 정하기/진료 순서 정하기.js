function solution(emergency) {
  let order = [...emergency].sort((a, b) => b - a);
  let answer = emergency.map((v) => order.indexOf(v) + 1);
  return answer;
}
