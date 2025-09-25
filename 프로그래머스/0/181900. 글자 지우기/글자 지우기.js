function solution(my_string, indices) {
  return [...my_string].reduce((result, v, idx) => (indices.includes(idx) ? result : result + v), "");
}
