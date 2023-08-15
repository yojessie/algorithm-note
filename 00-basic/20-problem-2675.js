// 2023-06-07
// 문자열 문제

const input = require("fs").readFileSync("./input.txt").toString().split("\n");

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  const [times, string] = input[i].split(" ");
  let answer = "";
  for (const j of string) {
    answer += j.repeat(times);
  }
  console.log(answer);
}

// for (let i = 1; i <= num; i++) {
//     const [times, string] = input[i].split(' ')
//     let answer = ''
//     for (let s of string) {
//         for (let j = 0; j < times; j++) {
//             answer += s
//         }
//     }
//     console.log(answer)
// }
