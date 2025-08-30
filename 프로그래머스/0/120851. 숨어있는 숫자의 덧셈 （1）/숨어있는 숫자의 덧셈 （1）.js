function solution(my_string) {
  return my_string.match(/[\d]/g).reduce((sum, n) => sum + Number(n), 0);
}