function solution(polynomial) {
  let poly = polynomial.split(" + ");
  let x = 0;
  let c = 0;

  for (const num of poly) {
    if (num.includes("x")) {
      x += parseInt(num) || 1;
    } else {
      c += parseInt(num);
    }
  }

  let answer = [];
  if (x) {
    answer.push(x === 1 ? "x" : `${x}x`);
  }
  if (c) {
    answer.push(c);
  }

  return answer.join(" + ");
}