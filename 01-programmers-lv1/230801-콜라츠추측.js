// 연습문제 - 콜라츠추측
// https://school.programmers.co.kr/learn/courses/30/lessons/12943

// 2022-08-18
// answer값을 initial이라는 문자로 초기화 한것은... 뭐 때문이었을까??
function solution(num) {
    var answer = "initial";
    let count = 0;
  
    for (let i = 0; i < 500; i++) {
      if (num == 1) {
        return (answer = count);
      }
  
      if (num % 2 == 0) {
        num = num / 2;
        count = count + 1;
      } else if (num % 2 !== 0) {
        num = num * 3 + 1;
        count = count + 1;
      }
    }
  
    if (num !== 1) {
      return (answer = -1);
    }
  
    return answer;
  }

// 2023-08-01
function solution(num) {
    let count = 0
    while (count <= 500) {
        if(num === 1) return count
        else if (count === 500) return -1
        
        count++
        if (num % 2 === 0) num /= 2
        else num = (num * 3) + 1
    }
}
// 전에 풀때는 한참 걸렸던거 같은데
// 이번엔 3분컷으로 풀 수 있었다