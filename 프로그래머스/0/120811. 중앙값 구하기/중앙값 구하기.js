function solution(array) {
  array.sort((a, b) => a - b);

  let mid = (array.length - 1) / 2;
  let answer = array[mid];

  return answer;
}