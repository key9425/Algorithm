function solution(num_list) {
  let even = 0;
  let odd = 0;

  num_list.forEach((num) => {
    if (num % 2) {
      odd++;
    } else {
      even++;
    }
  });
  
  let answer = [even, odd];
  return answer;
}
