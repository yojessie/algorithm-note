// 2023-06-05
// 조건문 문제

const input = require("fs").readFileSync("./input.txt").toString().split("\n");

const a = Number(input[0]);

if (a >= 90) {
  console.log("A");
} else if (a >= 80) {
  console.log("B");
} else if (a >= 70) {
  console.log("C");
} else if (a >= 60) {
  console.log("D");
} else {
  console.log("F");
}
