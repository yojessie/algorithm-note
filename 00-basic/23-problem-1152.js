// 2023-06-07
// 문자열 문제

const input = require("fs").readFileSync("./input.txt").toString();

const words = input.trim().split(" ");

console.log(words == "" ? 0 : words.length);
