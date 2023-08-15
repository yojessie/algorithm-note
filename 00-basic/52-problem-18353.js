// 2023-07-25
// 이진탐색 문제 - 병사 배치하기
// https://www.acmicpc.net/problem/18353

const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);

const arr = input.map(Number).reverse();
// LIS를 구하기위해 배열 뒤집기 (문제에서는 내림차순으로 되어있으므로)

function lowerBound(arr, target, start, end) {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
  // target값이 들어갈 수 있는 가장 왼쪽자리를 구하기 위한
  // 이진탐색 함수
}

const d = [0]; // LIS 구성
for (const i of arr) {
  if (d.at(-1) < i) d.push(i);
  // i값이 LIS의 가장 뒤의 값보다 크면 그냥 LIS 맨 끝에 i 추가
  else {
    const index = lowerBound(d, i, 0, d.length);
    d[index] = i;
    // LIS 끝값보다 i가 작으면 i가 들어갈 수 있는 가장 왼쪽 index 구하기
    // LIS의 index번째 수를 i로 대체
  }
}
console.log(n - (d.length - 1));
// 처음 주어진 arr 갯수에서 LIS 갯수를 뺀다
// LIS 구성을 위해 처음에 0을 추가했으므로 d.length - 1

// 문제만 보고 혼자 풀면서 이중 반복문으로 풀려고 하다가
// 강의에서 설명해주는 로직을 먼저 이해하고 풀기로 했다.
// 이 문제는 LIS (최장 증가 부분 수열)을 구해서 푸는 문제였는데
// LIS를 구할때 이진탐색을 이용하면 시간복잡도를 O(log n)으로 줄일 수 있다.

// 몇달 놓고 있었더니 그동안 학습한 내용을 또 다 잃어버렸는데
// 문제풀면서 조금씩 복습해야겠다.
