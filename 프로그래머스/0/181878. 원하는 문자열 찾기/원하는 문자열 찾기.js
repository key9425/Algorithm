function solution(myString, pat) {
  return new RegExp(pat.toLowerCase()).test(myString.toLowerCase()) ? 1 : 0;
}
