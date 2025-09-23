function solution(arr, queries) {
  queries.forEach((query) => {
    let [start, end] = query;
    for (let i = start; i <= end; i++) {
      arr[i]++;
    }
  });
  return arr;
}
