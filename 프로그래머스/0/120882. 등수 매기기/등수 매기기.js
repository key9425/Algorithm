function solution(score) {
  let avg = score.map((v) => v.reduce((total, num) => total + num) / 2);
  let sort_avg = [...avg].sort((a, b) => b - a);
  let answer = avg.map((v) => sort_avg.indexOf(v) + 1);
  return answer;
}
