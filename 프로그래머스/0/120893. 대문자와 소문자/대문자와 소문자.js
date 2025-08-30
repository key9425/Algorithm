function solution(my_string) {
  return my_string.replace(/[a-zA-Z]/g, (char) => (char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()));
}
