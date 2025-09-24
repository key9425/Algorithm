function solution(arr, queries) {
  queries.forEach((query) => {
    const [s, e, k] = query;
    for (let i = Math.ceil(s / k); i <= e / k; i++) {
      arr[i * k]++;
    }
  });

  return arr;
}
