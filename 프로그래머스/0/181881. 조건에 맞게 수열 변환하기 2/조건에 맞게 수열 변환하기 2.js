function solution(arr) {
  let check = true;
  let x = 0;

  while (check) {
    check = false;
    x++;
    arr = arr.map((v) => {
      if (v >= 50 && v % 2 === 0) {
        check = true;
        return v / 2;
      } else if (v < 50 && v % 2 === 1) {
        check = true;
        return v * 2 + 1;
      }
    });
  }

  return x - 1;
}