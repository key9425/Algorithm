function solution(s) {
  let answer = [...s]
    .filter((value) => s.split(value).length === 2)
    .sort()
    .join("");
  return answer;
}
