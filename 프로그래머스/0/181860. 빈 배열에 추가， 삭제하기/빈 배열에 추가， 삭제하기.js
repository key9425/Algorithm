function solution(arr, flag) {
  let answer = [];
  flag.forEach((v, i) => {
    answer = v ? [...answer, Array(arr[i] * 2).fill(arr[i])].flat() : answer.slice(0, answer.length - arr[i]);
  });
  return answer;
}