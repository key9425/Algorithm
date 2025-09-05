function solution(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return arr1.length > arr2.length ? 1 : -1;
  } else {
    sum1 = arr1.reduce((t, v) => t + v, 0);
    sum2 = arr2.reduce((t, v) => t + v, 0);
    return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1;
  }
}
