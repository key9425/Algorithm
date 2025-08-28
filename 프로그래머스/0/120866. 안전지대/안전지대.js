function search(x, y, visited) {
  const move = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  for (const [dx, dy] of move) {
    let nx = x + dx;
    let ny = y + dy;
    if (0 <= nx && nx < visited.length && 0 <= ny && ny < visited.length && !visited[nx][ny]) {
      visited[nx][ny] = 1;
    }
  }
}

function solution(board) {
  let visited = JSON.parse(JSON.stringify(board));

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j]) {
        search(i, j, visited);
      }
    }
  }

  return visited
    .map((v) => v.join(""))
    .join("")
    .replaceAll("1", "").length;
}
