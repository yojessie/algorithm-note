// 2023-06-13
// 그리디 알고리즘 - 신입사원

// 문제가 뭔가 이상하다고 느꼈는데
// 1차에서 통과한 사람 (서류심사 순위)를 기준으로 정렬하고
// 1차 1위사람의 2차(면접심사) 순위 보다 낮은 사람을 탈락시키는 것으로 이해하고 풀이

// 강의에서 문제해결 아이디어를 보고 겨우 풀어냄
const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const tc = Number(n);

let line = 0;
for (let i = 0; i < tc; i++) {
  const n = Number(input[line]);
  const arr = [];
  for (let j = line + 1; j <= line + n; j++) {
    arr.push(input[j].split(" ").map(Number));
  }
  arr.sort((a, b) => a[0] - b[0]);
  let count = 1;
  let min = arr[0][1];
  for (const x of arr) {
    if (x[1] < min) {
      min = x[1];
      count++;
    }
  }
  console.log(count);
  line += n + 1;
}
