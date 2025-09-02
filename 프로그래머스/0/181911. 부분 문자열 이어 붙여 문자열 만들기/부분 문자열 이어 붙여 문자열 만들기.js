function solution(my_strings, parts) {
  return parts.map((part, idx) => my_strings[idx].slice(part[0], part[1] + 1)).join("");
}
