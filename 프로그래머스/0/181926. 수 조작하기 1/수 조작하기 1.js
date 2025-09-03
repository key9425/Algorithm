function solution(n, control) {
  let input = { w: 1, s: -1, d: 10, a: -10 };
  return control.split("").reduce((result, v) => result + input[v], n);
}
