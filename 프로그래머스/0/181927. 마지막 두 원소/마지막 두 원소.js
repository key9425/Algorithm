function solution(num_list) {
  let ln = num_list.length;
  return [...num_list, num_list[ln - 1] > num_list[ln - 2] ? num_list[ln - 1] - num_list[ln - 2] : num_list[ln - 1] * 2];
}
