function solution(arr) {
  const ln = arr.length;
  const k = Math.ceil(Math.log2(ln));
  const zeroArr = Array(2 ** k - ln).fill(0);
  return [...arr, ...zeroArr];
}