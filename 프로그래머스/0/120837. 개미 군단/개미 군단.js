function solution(hp) {
  let power = [5, 3, 1];
  let answer = 0;
    
  power.forEach((p) => {
    let [div, mod] = [Math.floor(hp / p), hp % p];
    answer += div;
    hp = mod;
  });
    
  return answer;
}
