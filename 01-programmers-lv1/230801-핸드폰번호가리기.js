// 연습문제 - 핸드폰 번호 가리기
// https://school.programmers.co.kr/learn/courses/30/lessons/12948

// 2022-08-17
function solution(phone_number) {
    var answer = "";
  
    front = phone_number.substring(0, phone_number.length - 4);
    replaceNum = front.replace(/[0-9]/g, "*");
    last = phone_number.substring(phone_number.length - 4);
  
    answer = replaceNum + last;
  
    return answer;
}

// 2023-08-01
function solution(phone_number) {
    let length = phone_number.length
    let hide = '*'.repeat(length - 4)
    let last = phone_number.slice(-4)
    return hide + last
}
// 이번에는 더 간단하게 풀 수 있었다.