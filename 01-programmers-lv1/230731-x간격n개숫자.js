// 연습문제 - x만큼 간격이 있는 n개의 숫자
// https://school.programmers.co.kr/learn/courses/30/lessons/12954

// 2022-08-17풀이
function solution(x, n) {
    let answer = [];
  
    answer.push(x);
    for (let i = 0; i < n - 1; i++) {
      answer.push(answer[i] + x);
    }
  
    return answer;
}

// 2023-07-31 풀이
function solution(x, n) {
    let answer = []
    for (let i = 1; i <= n; i++) {
        answer.push(i * x)
    }
    return answer
}

// 이렇게 전과 비슷한 방식으로 풀었다가
// 반복문의 조건을 활용해보고 싶어서 이렇게도 풀어봤는데

function solution(x, n) {
    let answer = []
    for (let i = x; Math.abs(i) <= Math.abs(x * n); i += x) {
        answer.push(i)
    }
    return answer
}
// 이건 절대값을 구하는 함수때문에 런타임 에러가 났다.

