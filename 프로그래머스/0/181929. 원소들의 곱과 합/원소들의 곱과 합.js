function solution(num_list) {
  const mult = num_list.reduce((result, v) => result * v, 1);
  const sum = num_list.reduce((result, v) => result + v, 0);
  return mult < Math.pow(sum, 2) ? 1 : 0;
}
