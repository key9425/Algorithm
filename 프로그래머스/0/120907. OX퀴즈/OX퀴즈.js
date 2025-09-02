function solution(quiz) {
  return quiz.map((value) => {
    let temp = value.split(" ");
    let result = "X";

    if (temp[1] === "+") {
      result = Number(temp[0]) + Number(temp[2]) === Number(temp[4]);
    } else {
      result = Number(temp[0]) - Number(temp[2]) === Number(temp[4]);
    }

    return result ? "O" : "X";
  });
}
