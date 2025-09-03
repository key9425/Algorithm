function solution(myString, pat) {
  let newString = "";
  for (const s of myString) {
    newString += s === "A" ? "B" : "A";
  }

  let reg = new RegExp(pat);
  return reg.test(newString) ? 1 : 0;
}
