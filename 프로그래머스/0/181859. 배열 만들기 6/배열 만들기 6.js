function solution(arr) {
  let stk = [];

  arr.forEach((v) => {
    if (!stk.length || stk[stk.length - 1] !== v) {
      stk.push(v);
    } else {
      stk.pop();
    }
  });

  return stk.length ? stk : [-1];
}