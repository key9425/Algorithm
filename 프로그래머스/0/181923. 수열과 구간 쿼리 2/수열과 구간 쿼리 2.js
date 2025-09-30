function solution(arr, queries) {
  const answer = [];

  queries.forEach(([s, e, k]) => {
    let temp = Infinity;
    for (let i = s; i <= e; i++) {
      if (arr[i] > k && arr[i] < temp) {
        temp = arr[i];
      }
    }
    answer.push(temp !== Infinity ? temp : -1);
  });

  return answer;
}
