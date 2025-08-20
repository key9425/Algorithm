function gcd(a, b) {
  while (b > 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

function solution(numer1, denom1, numer2, denom2) {
  let numer = numer1 * denom2 + numer2 * denom1;
  let denom = denom1 * denom2;

  let num = gcd(numer, denom);
  let answer = [numer / num, denom / num];

  return answer;
}
