function solution(array, height) {
  let answer = array.filter((value) => value > height).length;
  return answer;
}