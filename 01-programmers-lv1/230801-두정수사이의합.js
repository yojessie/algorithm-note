// 연습문제 - 두 정수 사이의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/12912

// 2022-08-26
function solution(a, b) {
    answer = 0;
  
    let big = a > b ? a : b;
    let small = a < b ? a : b;
  
    for (let i = small; i <= big; i++) {
      answer = answer + i;
    }
  
    return answer;
}

// 2023-08-01
function solution(a, b) {
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    let sum = 0
    for (let i = min; i <= max; i++) {
        sum += i
    }
    return sum
}
// 전에는 max와 min을 활용해볼 생각을 못했구나..