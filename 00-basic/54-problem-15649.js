// 2023-07-28
// 백트래킹, DFS 문제 - N 과 M(1)
// 길이가 m인 순열을 구하는 문제
// https://www.acmicpc.net/problem/15649

const [n, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
// 자연수 n까지의 수열이 담긴 배열 생성

const visited = new Array(n).fill(false);
// 방문처리용 배열
const selected = [];
// 선택되는 값들을 채워넣었다 뺏다 할 배열

let answer = "";
function dfs(arr, depth) {
  if (depth === m) {
    for (const i of selected) answer += `${i} `;
    answer += "\n";
    return;
    // 깊이가 문제에서 주어진 길이 m과 같아지면
    // 저장해놓은 선택된 값들을 하나씩 결과값에 추가하고
    // 개행처리
    // 리턴문으로 무한루프 방지
  }
  for (const i of arr) {
    if (visited[i]) continue;
    // 이미 방문처리(true)된 요소라면 턴 넘기기
    selected.push(i);
    visited[i] = true;
    // 이번에 해당되는 값을 선택값 배열에 추가하고
    // 해당 자리 방문처리
    dfs(arr, depth + 1);
    // 뎁스를 1 증가시켜 재귀호출
    selected.pop();
    visited[i] = false;
    // 뎁스가 문제에 주어진 m길이에 도달하여 재귀호출이 끝났다면
    // 선택값에 있는 값은 빼고 방문취소처리
  }
}

dfs(arr, 0);
// 처음에는 arr배열의 0 뎁스부터 호출 시작
console.log(answer);
// 함수 반복 종료 후 정리된 값을 출력

// 재귀함수 호출만하면 정신이 하나도없다.
// 백트래킹 유형은 처음이라 일단 강의 내용대로 하나하나 따라가며 작성한 코드.
// 그냥 코드만 읽어서 이해가 잘 안되어서 손코딩하며 값을 확인했다.
