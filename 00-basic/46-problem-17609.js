// 2023-06-17
// 그리디 문제 - 회문

// const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

// let answer = ''
// for (let word of input) {
//     let result = 0
//     word = '0' + word

//     for (let i = 1; i <= word.length/2; i++) {
//         if (word[i] == word.at(-i)) continue
//         else {
//             if (word[i + 1] == word.at(-i)) result = 1
//             else if (word[i] == word.at(-i - 1)) result = 1
//             else {
//                 result = 2
//                 break
//             }
//         }
//     }
//     answer += `${word}, ${result}\n`
// }
// console.log(answer)

// 왠만한 반례 다 되는데 계속 통과가 안됐다.
// 추가로 찾은 반례는

// 21
// abbab
// aab
// aaab
// aaaab
// aaaaab
// aaaaaab
// axaaxaa
// abcddadca
// aabcbcaa
// ababbabaa
// abca
// babba
// sumumuus
// XYXYAAYXY
// abc
// cccfccfcc
// abcddcdba
// ppbpppb
// aabcdeddcba
// aabab
// aapqbcbqpqaa

// 1
// 1
// 1
// 1
// 1
// 1
// 1
// 2
// 1
// 1
// 1
// 1
// 1
// 1
// 2
// 1
// 1
// 2
// 2
// 2
// 1

const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function check(x) {
  return x === x.split("").reverse().join("");
}

for (const word of input) {
  if (check(word)) console.log(0);
  else {
    let found = false;
    const n = word.length;
    for (let i = 0; i < n / 2; i++) {
      if (word[i] !== word[n - 1 - i]) {
        if (check(word.slice(0, i) + word.slice(i + 1, n))) found = true;
        if (check(word.slice(0, n - 1 - i) + word.slice(n - i, n)))
          found = true;
        break;
      }
    }
    console.log(found ? 1 : 2);
  }
}

// 내가 해맷던 이유는
// 나는 필요없는 글자를 삭제할때 splice를 사용하고싶었기 때문
// 하지만 arr.splice(i, 1)는 삭제된 값을 반환하고
// splice 실행후에는 원본 arr값이 변경되기 때문에 2가지 경우의수를 제대로 체크해볼 수 없었다.
// 강의 답안에서처럼 원본 문자열에서 원하는 값을 뽑아내 붙인 값을 활용해야
// 제대로 비교가 되는거였다......하........휴........
