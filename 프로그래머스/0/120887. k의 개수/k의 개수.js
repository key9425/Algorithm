function solution(i, j, k) {
  let answer = Array(j - i + 1)
    .fill(i)
    .map((num, idx) => num + idx)
    .join("")
    .split(k);

  return answer.length - 1;
}