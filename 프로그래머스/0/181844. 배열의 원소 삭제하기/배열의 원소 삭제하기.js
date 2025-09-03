function solution(arr, delete_list) {
  const delete_set = new Set(delete_list);
  let answer = [];

  arr.forEach((v) => {
    if (!delete_set.has(v)) answer.push(v);
  });

  return answer;
}
