// 2023-06-04
// 입출력 문제
// 입력값을 읽어와 문자열로 저장하고 활용하기 위해 fs모듈 이용

const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().split("\n");

const line = input[0].split(" ");
// 위까지 동일 포맷

const a = line[0];
const b = line[1];

console.log(Number(a) + Number(b));
