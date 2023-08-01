// 연습문제 - 문자열을 정수로 바꾸기
// https://school.programmers.co.kr/learn/courses/30/lessons/12925

// 2022-08-23
function solution(s) {
    var answer = 0;
  
    answer = parseInt(s);
  
    return answer;
}

// 2023-08-01
function solution(s) {
    return Number(s)
}

// 10진수 외에 특정진수로 변환할게 아니라면 Number사용이
// 의도에 더 잘 맞다는 것을 알게되었기때문에 이번에는 Number를 사용했다.