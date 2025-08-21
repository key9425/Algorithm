function solution(age) {
  let age_str = "abcdefghij";
  let answer = [...String(age)].map((v) => age_str[Number(v)]).join("");
  return answer;
}
