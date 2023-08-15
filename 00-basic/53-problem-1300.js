// 2023-07-26
// 이진탐색 문제 - K번째 수
// https://www.acmicpc.net/problem/1300

const [n, k] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let result = 0;
let start = 1;
let end = 10 ** 10;
// 이진탐색을 위한 최소값, 최대값 할당
// 최소 최대값은 배열의 요소가 가질 수 있는 데이터 값을 의미

while (start <= end) {
  let total = 0;
  const mid = parseInt((start + end) / 2);
  // 여기서 mid값은 만약 오름차순 정렬한 일차원 배열의 k번째 수가 mid라면
  // mid보다 작은 수가 몇개 있겠는가를 확인하기 위함
  // 일차원 배열이 오름차순이기때문에 mid보다 작은 수의 합을 구하는것은
  // mid의 인덱스값을 구하는 것과 같다.

  for (let i = 1; i <= n; i++) {
    total += Math.min(parseInt(mid / i), n);
    // 주어진 이중배열에서 각 라인에서 mid보다 작은값이 몇개 있는지 계산
    // 만약 n개를 넘어가면 최대값인 n을 total에 더하기
  }

  if (total >= k) {
    result = mid;
    // 만약 total 갯수가 k인덱스를 충족한다면
    // 일단 결과값을 mid값으로 저장하고
    end = mid - 1;
    // 범위를 더 줄여서 더 최소의 mid값이 있는지 확인해본다
    // mid값을 최소로 구하는 이유는 일차원배열로 정렬했을때 중복값이 있을 수 있기 때문
  } else {
    start = mid + 1;
    // total 갯수가 k인덱스를 충족하지 못하면
    // 더 큰 값의 범위에서 다시 계산해본다
  }
}

console.log(result);

// 문제를 이해하는데 큰 도움을 받은 링크
// https://st-lab.tistory.com/281

// 나에겐 너무 어려워서 혼자서는 제대로 시도해보지 못하고
// 풀이를 보고 겨우 이해한 문제
