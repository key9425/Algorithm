function solution(board) {
  let danger = new Set();
  const n = board.length;
  const d = [
    [0, 0],
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j]) {
        d.forEach(([di, dj]) => {
          let [ni, nj] = [i + di, j + dj];
          if (0 <= ni && ni < n && 0 <= nj && nj < n) {
            danger.add(`(${ni}, ${nj})`);
          }
        });
      }
    }
  }

  return n * n - danger.size;
}