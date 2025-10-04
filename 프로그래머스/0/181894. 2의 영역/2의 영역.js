function solution(arr) {
  const first = arr.indexOf(2);
  const last = arr.lastIndexOf(2);
  const answer = arr.slice(first, last + 1);
  return answer.length === 0 ? [-1] : answer;
}