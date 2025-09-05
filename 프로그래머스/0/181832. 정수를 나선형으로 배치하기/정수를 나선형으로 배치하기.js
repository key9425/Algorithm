function solution(n) {
  let answer = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  let way = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let [i, j, w] = [0, 0, 0];
  answer[0][0] = 1;

  for (let num = 2; num <= n ** 2; num++) {
    let [ni, nj] = [i + way[w][0], j + way[w][1]];

    if (ni < 0 || ni >= n || nj < 0 || nj >= n || answer[ni][nj]) {
      w = (w + 1) % 4;
      num--;
      continue;
    }

    [i, j] = [ni, nj];
    answer[i][j] = num;
  }

  return answer;
}