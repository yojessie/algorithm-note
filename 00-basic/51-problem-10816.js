// 2023-06-26
// 이진탐색 문제 - 숫자카드 2

// const [a, b, c, d] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// const card = b.split(" ").map(Number)
// const check = d.split(" ").map(Number)

// let answer = ''
// for (let i of check) {
//     let count = card.filter(x => x == i).length
//     answer += `${count} `
// }

// console.log(answer)

// 이렇게 풀려고 했더니 역시나 시간초과
// 단위가 크니 이진탐색으로 풀어보자

const [n, a, b, c] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const card = a
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const check = c.split(" ").map(Number);

function lowerBound(arr, target, start, end) {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function countByRange(arr, left, right) {
  const leftIdx = lowerBound(arr, left, 0, arr.length);
  const rightIdx = upperBound(arr, right, 0, arr.length);
  return rightIdx - leftIdx;
}

let answer = "";
for (const i of check) {
  const result = countByRange(card, i, i);
  answer += `${result} `;
}
console.log(answer);

// 강의에서 배운 함수들을 이용하는 예제인데
// 내일 다시 상기시키면서 처음부터 풀어봐야겠다.
