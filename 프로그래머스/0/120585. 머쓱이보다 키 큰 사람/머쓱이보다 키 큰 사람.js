function solution(array, height) {
  array.push(height);
  array.sort((a, b) => b - a);
  let answer = array.indexOf(height);
  return answer;
}