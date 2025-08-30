function solution(my_string, num1, num2) {
  let arr_string = [...my_string];
  arr_string[num1] = my_string[num2];
  arr_string[num2] = my_string[num1];
  return arr_string.join("");
}