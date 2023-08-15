// 2023-07-28
// 백트래킹 문제 - 0 만들기 (중복순열문제)
// https://www.acmicpc.net/problem/7490

let [x, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input = input.map(Number);

let n = 0;
let arr = [];
// 반복문 돌때마다 바뀌어야하는데 함수 안에서 써야하는 값은 일단 빈 값으로 전역변수로 선언
const operator = [" ", "+", "-"];

function dfs(result, depth) {
  if (depth === n - 1) {
    // 기호는 숫자보다 하나 적으므로 깊이는 n-1
    let str = "";
    for (let i = 0; i < n - 1; i++) str += arr[i] + result[i];
    str += arr.at(-1);
    // 문자열에 숫자와 기호를 하나씩 추가하고
    // 마지막 숫자까지 더해준다
    const calc = eval(str.split(" ").join(""));
    if (calc === 0) console.log(str);
    // 공백이 없도록 문자열을 join시킨다음 eval함수로 연산한다
    // 값이 0이면 해당 문자열 출력
    return;
  }
  for (const i of operator) {
    result.push(i);
    dfs(result, depth + 1);
    result.pop();
    // 이번에는 중복이 가능한 순열이므로 방문체크는 필요없다
  }
}

for (const tc of input) {
  n = tc;
  arr = [];
  for (let i = 1; i <= tc; i++) arr.push(i);
  // 해당 tc에 맞는 n값과 배열 셋팅

  dfs([], 0);
  // 중복순열이 들어갈 빈 배열을 파라미터에 넣어서 함수 호출
}

// 강의의 문제풀이를 보고도 내 식으로 다시 해석하고 정리하느라 시간이 걸렸다.
// 이렇게 한줄씩 복습하면서 의미를 적어보니 더 좋은 것 같다.
