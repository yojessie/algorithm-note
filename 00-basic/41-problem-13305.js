// 2023-06-14
// 그리디 문제 - 주유소

// 부분점수 17점 받은 풀이
// const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
// const [dis, cost] = input.map(x => x.split(" ").map(Number))
// cost.pop()
// let answer = 0

// for (let i = 0; i < n - 1; i++) {
//     let min = Math.min(...cost)
//     if (cost[i] === min) {
//         let leftDis = 0
//         for (let j = i; j < n - 1; j++) {
//             leftDis += dis[j]
//         }
//         answer += cost[i] * leftDis
//         break
//     } else {
//         answer += cost[i] * dis[i]
//     }
// }

// console.log(answer)

// 강의 코드를 이해하고 다시 작성해본 코드

const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [dis, cost] = input.map((x) => x.split(" ").map(Number));

let answer = BigInt(0);
let min = cost[0];
for (let i = 0; i < dis.length; i++) {
  min = Math.min(min, cost[i]);
  answer += BigInt(min) * BigInt(dis[i]);
}

console.log(String(answer));

// JS에서 큰 정수를 처리할때는 BigInt를 사용한다
// (길이의 제약 없이 정수를 다룰 수 있게 한다)
// 숫자 끝에 n을 붙이거나 BigInt(숫자)로 사용한다.
// BigInt는 소수를 표현할 수 없다.
// Number 타입과 섞어서 사용할 수 없다. : 1n + 2 불가
// BigInt값을 저장하고 출력하면 정수 뒤에 n이 붙어서 출력된다.
// 따라서 위의 문제에서 answer 출력 시 string으로 변환해서 n을 제거했다.
