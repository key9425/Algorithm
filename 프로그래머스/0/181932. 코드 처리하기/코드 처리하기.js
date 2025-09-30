function solution(code) {
  let mode = false;
  let ret = "";

  [...code].forEach((v, i) => {
    if (v === "1") {
      mode = !mode;
    } else if (!mode && !(i % 2)) {
      ret += v;
    } else if (mode && i % 2) {
      ret += v;
    }
  });

  return ret === "" ? "EMPTY" : ret;
}