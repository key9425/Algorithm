function solution(common) {
  let ln = common.length;
  let [d, r] = [common[ln - 1] - common[ln - 2], common[ln - 1] / common[ln - 2]];
  return common[0] + d === common[1] ? common[ln - 1] + d : common[ln - 1] * r;
}
