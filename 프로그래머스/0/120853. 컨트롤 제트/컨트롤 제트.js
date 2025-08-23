function solution(s) {
  s = s.split(" ");
  let answer = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "Z") {
      i--;
    } else {
      answer += Number(s[i]);
    }
  }

  return answer;
}
