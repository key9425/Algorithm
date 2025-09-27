const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split("");
}).on("close", function () {
  const str = input.map((value) => (/[A-Z]/.test(value) ? value.toLowerCase() : value.toUpperCase()));
  console.log(str.join(""));
});
