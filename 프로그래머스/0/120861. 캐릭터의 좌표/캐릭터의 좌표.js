function solution(keyinput, board) {
  let move = { up: [0, 1], down: [0, -1], left: [-1, 0], right: [1, 0] };
  let [row, col] = board.map((v) => (v - 1) / 2);
  let answer = [0, 0];

  keyinput.forEach((key) => {
    let [i, j] = move[key];
    if (Math.abs(answer[0] + i) <= row && Math.abs(answer[1] + j) <= col) {
      answer[0] += i;
      answer[1] += j;
    }
  });

  return answer;
}