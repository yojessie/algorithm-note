// 연습문제 - 서울에서 김서방 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/12919

// 2022-08-26
function solution(seoul) {
    let location = seoul.indexOf("Kim");
  
    return `김서방은 ${location}에 있다`;
}

// 2023-08-01
function solution(seoul) {
    let idx = seoul.indexOf('Kim')
    return `김서방은 ${idx}에 있다`
}
