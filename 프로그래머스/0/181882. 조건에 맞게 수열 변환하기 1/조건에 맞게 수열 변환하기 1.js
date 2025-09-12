function solution(arr) {
  return arr.map((v) => {
    if (50 <= v && !(v % 2)) {
      return v / 2;
    } else if (50 > v && v % 2) {
      return v * 2;
    } else {
      return v;
    }
  });
}