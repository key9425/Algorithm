function solution(my_string) {
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  return [...my_string].filter((str) => !vowels.has(str)).join("");
}
