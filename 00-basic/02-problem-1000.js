// 2023-06-04
// 입력값을 읽어와 문자열로 저장하고 활용하기 위해 fs모듈 이용

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let line = input[0].split(' ');
// 위까지 동일 포맷

let a = line[0]
let b = line[1]

console.log(Number(a) + Number(b));