function solution(my_string) {
  let arr_str = my_string.split(" ");
  let answer = Number(arr_str[0]);

  for (let i = 1; i < my_string.length; i += 2) {
    switch (arr_str[i]) {
      case "+":
        answer += Number(arr_str[i + 1]);
        break;
      case "-":
        answer -= Number(arr_str[i + 1]);
        break;
    }
  }

  return answer;
}
