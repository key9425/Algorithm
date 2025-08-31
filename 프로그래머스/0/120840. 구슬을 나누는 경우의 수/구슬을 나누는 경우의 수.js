function solution(balls, share) {
  let answer = 1;

  for (let i = balls; i > share; i--) {
    answer *= i;
  }

  for (let i = balls - share; i > 0; i--) {
    answer /= i;
  }

  return answer;
}
