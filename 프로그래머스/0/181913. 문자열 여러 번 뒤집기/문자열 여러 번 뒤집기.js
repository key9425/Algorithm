function solution(my_string, queries) {
  strArr = [...my_string];

  queries.forEach(([s, e]) => {
    const newStr = strArr.slice(s, e + 1).reverse();
    strArr.splice(s, e - s + 1, ...newStr);
  });

  return strArr.join("");
}