function solution(array) {
  let map = new Map();

  array.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });

  let maxCount = 0;
  let num = -1;
  let check = false;

  map.forEach((value, key) => {
    if (maxCount < value) {
      maxCount = value;
      num = key;
      check = false;
    } else if (maxCount === value) {
      check = true;
    }
  });

  return check ? -1 : num;
}
