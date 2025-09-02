function solution(dots) {
  let getSlope = (dot1, dot2) => (dot1[0] - dot2[0]) / (dot1[1] - dot2[1]);
  let c = [
    [0, 1, 2, 3],
    [0, 2, 1, 3],
    [0, 3, 1, 2],
  ];

  return c.some(([i, j, k, z]) => getSlope(dots[i], dots[j]) === getSlope(dots[k], dots[z])) ? 1 : 0;
}
