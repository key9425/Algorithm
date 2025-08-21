function solution(array, n) {
  let answer = array.filter((value) => value === n).length;
  return answer;
}
