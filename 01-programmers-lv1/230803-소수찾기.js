// 연습문제 - 소수찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/12921

// 2023-08-03
// 카운트를 역으로 하는거라 효율성 테스트 통과할 줄 알았는데
// 안돼서 에라토스테네스의 체 공식을 다시 확인해봤다.
function solution(n) {
  let answer = n - 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        answer--;
        break;
      }
    }
  }
  return answer;
}
solution();

// 에라토스테네스의 체 공식 활용
function solution2(n) {
  const arr = new Array(n + 1).fill(true);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.filter((x) => x).length;
}
solution2();
