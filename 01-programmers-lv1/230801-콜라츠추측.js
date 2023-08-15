// 연습문제 - 콜라츠추측
// https://school.programmers.co.kr/learn/courses/30/lessons/12943

// 2023-08-01
function solution(num) {
  let count = 0;
  while (count <= 500) {
    if (num === 1) return count;
    if (count === 500) return -1;

    count++;
    if (num % 2 === 0) num /= 2;
    else num = num * 3 + 1;
  }
}
solution();
// 전에 풀때는 한참 걸렸던거 같은데
// 이번엔 3분컷으로 풀 수 있었다
