function solution(strArr) {
  const strLn = {};
  let mx = 1;

  strArr.forEach((str) => {
    strLn[str.length] = (strLn[str.length] || 0) + 1;

    if (mx < strLn[str.length]) {
      mx = strLn[str.length];
    }
  });

  return mx;
}