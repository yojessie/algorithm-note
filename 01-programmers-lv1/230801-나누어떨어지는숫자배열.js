// 연습문제 - 나누어 떨어지는 숫자 배열
// https://school.programmers.co.kr/learn/courses/30/lessons/12910

// 2022-08-27
function solution(arr, divisor) {
    var answer = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % divisor == 0) {
        answer.push(arr[i]);
      }
    }
  
    return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}

// 2023-08-01
function solution(arr, divisor) {
    arr = arr.sort((a, b) => a - b)

    let answer = []
    for (let i of arr) {
        if (i % divisor === 0) answer.push(i)
    }

    if (answer.length === 0) answer.push(-1)
    return answer
}
// 전이랑 비슷한 로직인데 조금 다듬어 진 것 같다.
// 다른 정답코드를 보니 filter를 활용하는 방법도 있어서 다시 해봤다.

function solution(arr, divisor) {
    arr = arr.sort((a, b) => a - b).filter((i) => i % divisor === 0)
    return arr.length !== 0 ? arr : [-1]
}
// 유의미한 차이는 아니지만 속도는 filter 함수 쓴게 조금 더 빨랐다.(tc6)