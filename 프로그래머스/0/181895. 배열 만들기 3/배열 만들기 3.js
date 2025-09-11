function solution(arr, intervals) {
  return intervals.reduce((result, [x, y]) => [...result, ...arr.slice(x, y + 1)], []);
}
