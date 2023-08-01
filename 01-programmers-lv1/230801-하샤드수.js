// 연습문제 - 하샤드수
// https://school.programmers.co.kr/learn/courses/30/lessons/12947

// 2022-08-17
function solution(x) {
    var answer = true;
  
    let splited = x.toString().split("").map(Number);
    let sum = splited.reduce((a, b) => a + b);
  
    if (x % sum !== 0) {
      answer = false;
    }
  
    return answer;
}

// 2023-08-01
function solution(x) {
    let sum = x.toString().split("").map(Number).reduce((acc, cur) => acc + cur)
    return x % sum === 0
}
// 전에는 답까지 아주 돌아돌아 갔었구나..