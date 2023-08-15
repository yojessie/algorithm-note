// 2023-06-06
// 배열 문제

const input = require("fs").readFileSync("./input.txt").toString().split("\n");

const arr = input.map((x) => x.split(" "));
let answer = "";

for (let i = 1; i < arr.length - 1; i++) {
  const thisArr = arr[i].map(Number);
  const num = thisArr[0];
  const sum = thisArr.reduce((acc, cur) => acc + cur) - num;
  const avg = sum / num;

  let count = 0;
  for (let j = 1; j <= num; j++) {
    if (thisArr[j] > avg) count++;
  }

  const percent = (count / num) * 100;
  answer += `${percent.toFixed(3)}%\n`;
}
console.log(answer);
