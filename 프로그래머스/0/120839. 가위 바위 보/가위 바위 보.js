function solution(rsp) {
  let win = { 2: 0, 0: 5, 5: 2 };
  let answer = [...rsp].map((value) => win[value]).join("");
  return answer;
}
