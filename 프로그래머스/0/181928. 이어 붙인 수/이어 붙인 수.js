function solution(num_list) {
  let odd = "";
  let even = "";

  num_list.forEach((num) => {
    num % 2 ? (even += num) : (odd += num);
  });

  return parseInt(odd) + parseInt(even);
}
