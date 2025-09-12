function solution(number) {
  return [...number].reduce((t, n) => t + parseInt(n), 0) % 9;
}
