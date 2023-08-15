// 2023-06-18
// 그리디 문제 - 박스 채우기

// const [a, b, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// let box = a.split(" ").map(Number)
// let arr = input.map(x => x.split(" ").map(Number))

// let cube = 2
// for (let i of arr) {
//     if (i[0] == 0) i[0] = 1
//     else {
//         i[0] = cube
//         cube *= 2

//     }
// }
// arr.reverse()
// let area = box[0] * box[1] * box[2]
// let count = 0
// for (let i of arr) {
//     let max = Math.max(...box)
//     if (max >= i[0]) box = box.map(x => x - i[0])
//     else continue

//     for (let j = 0; j < i[1]; j++) {
//         if (area <= 0) break
//         else {
//             area -= i[0] ** 3
//             count++
//         }
//     }
// }

// if (area == 0) console.log(count)
// else console.log(-1)

// 면적으로 계산하려고 위 코드로 며칠동안 틈틈이 생각하다가
// 면적 계산 자체가 뭔가 잘못됐단걸 깨닫고 (정확이 뭐가 잘못된지 아직도 잘 모르겠음...)
// 여러 풀이를 보고 논리를 이해해서 다시 풀었다.

// https://velog.io/@ttc1018/%EB%B0%B1%EC%A4%80-1493%EB%B0%95%EC%8A%A4%EC%B1%84%EC%9A%B0%EA%B8%B0-Python-%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EA%B7%B8%EB%A6%AC%EB%94%94-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98
// https://steady-coding.tistory.com/14

const [a, b, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [l, w, h] = a.split(" ").map(Number);
const cube = input.map((x) => x.split(" ").map(Number));

for (const i of cube) {
  if (i[0] == 0) i[0] = 1;
  else i[0] = 2 ** i[0];
}
cube.reverse();

const boxSize = l * w * h;
let nowTotal = 0;
let count = 0;

for (const i of cube) {
  nowTotal *= 8;
  const nowCube = parseInt(l / i[0]) * parseInt(w / i[0]) * parseInt(h / i[0]);
  let available = nowCube - nowTotal;
  available = Math.min(i[1], available);

  nowTotal += available;
  count += available;
}
if (nowTotal == boxSize) console.log(count);
else console.log(-1);

// 이거 풀고나서 진심 춤췄다
// 앞에서 계속 고전한 이유는 두번째 링크의 글에서 찾았다.
// 박스가 3*4*8 짜리라면 부피는 96이고, 여기에 길이 4의 큐브를 넣는다면
// 박스 = 96, 큐브 = 64 의 부피를 가지므로 채울 수 있는 것 처럼 보이지만
// 실제로는 가장 작은 변이 3이기때문에 넣을 수 없다.
// 그래서 박스의 각 길이 / 큐브길이의 몫을 구한다음 부피를 구해야
// 해당 큐브가 들어갈 수 있는 최대 갯수를 얻을 수 있는 것이다.
