function solution(dots) {
  let dot1 = [...dots[0]];
  let dot2 = dots.find((v) => dot1[0] !== v[0] && dot1[1] !== v[1]);
  return Math.abs(dot1[0] - dot2[0]) * Math.abs(dot1[1] - dot2[1]);
}
