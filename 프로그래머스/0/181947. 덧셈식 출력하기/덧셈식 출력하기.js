const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  let [n1, n2] = input;
  console.log(`${n1} + ${n2} = ${Number(n1) + Number(n2)}`);
});
