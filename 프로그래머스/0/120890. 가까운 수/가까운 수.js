function solution(array, n) {
  let answer = array[0];

  for (let num of array) {
    if (Math.abs(n - num) < Math.abs(n - answer) || (Math.abs(n - num) === Math.abs(n - answer) && num < answer)) {
      answer = num;
    }
  }

  return answer;
}
