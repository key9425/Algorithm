function solution(my_string, is_suffix) {
  const reg = new RegExp(`${is_suffix}$`);
  return reg.test(my_string) ? 1 : 0;
}
