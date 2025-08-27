function solution(n) {
  let arr = [0];
  let num = 0;

  while (arr.length <= n) {
    num++;
    if (num % 3 && !num.toString().includes(3)) {
      arr.push(num);
    }
  }

  return arr[n];
}
