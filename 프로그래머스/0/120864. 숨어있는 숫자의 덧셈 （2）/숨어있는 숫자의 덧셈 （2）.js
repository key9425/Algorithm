function solution(my_string) {
  let nums = my_string.match(/\d+/g);
  return nums ? nums.reduce((result, n) => result + Number(n), 0) : 0;
}