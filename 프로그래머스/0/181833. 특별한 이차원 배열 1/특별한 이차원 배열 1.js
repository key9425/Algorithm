function solution(n) {
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => {
      return i === j ? 1 : 0;
    })
  );
}