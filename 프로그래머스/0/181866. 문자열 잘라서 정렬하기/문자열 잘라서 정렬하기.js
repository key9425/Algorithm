function solution(myString) {
  const answer = myString.split("x").filter((v) => v !== "");
  answer.sort();
  return answer;
}
