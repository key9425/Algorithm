function solution(lines) {
  let line = [];
  let answer = new Set();

  for (let i = 0; i < 2; i++) {
    for (let j = i + 1; j < 3; j++) {
      let x = lines[i][0] > lines[j][0] ? lines[i][0] : lines[j][0];
      let y = lines[i][1] > lines[j][1] ? lines[j][1] : lines[i][1];
      if (x < y) {
        line.push([x, y]);
      }
    }
  }

  line.forEach(([lx, ly]) => {
    for (let i = lx; i < ly; i++) {
      answer.add(`[${i}, ${i + 1}]`);
    }
  });

  return answer.size;
}