// 2023-06-15
// 그리디 문제 - 피보나치 수

// 감이 안와서 강의 답을 보고 다시 정리했다.
// 이것도 나중에 다시 풀어봐야하는 문제.

const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = input.map(Number);
const max = Math.max(...num);
const pibo = [0, 1];
for (let i = 1; pibo.at(-1) <= max; i++) {
  pibo.push(pibo[i] + pibo[i - 1]);
}

for (let tc of num) {
  const result = [];
  let i = -1;
  while (tc > 0) {
    const thisPibo = pibo.at(i);
    if (tc >= thisPibo) {
      tc -= thisPibo;
      result.push(thisPibo);
    }
    i--;
  }
  console.log(result.reverse().join(" "));
}
