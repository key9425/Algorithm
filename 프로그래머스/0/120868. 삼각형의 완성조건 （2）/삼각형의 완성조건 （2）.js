function solution(sides) {
  sides.sort((a, b) => a - b);
  let cnt1 = sides[0] * 2 - sides[1];
  let cnt2 = sides[1] - 1;
  return cnt1 + cnt2;
}
