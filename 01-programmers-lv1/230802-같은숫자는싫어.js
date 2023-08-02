// 스택/큐 - 같은 숫자는 싫어
// https://school.programmers.co.kr/learn/courses/30/lessons/12906

// 2022-09-04
function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}

// 2023-08-02
// 처음에는 stack 맨 뒷자리 확인용 코드를 stack.at(-1)로 사용했다가
// 효율성 테스트에서 실패했다.
// 인덱스 접근과 at() 접근은 효율성 차이가 났다.
// 근데 mdn을 살펴보면 at도 인덱스로 배열에 접근하는 방식인데 왜 차이가 날까..?
function solution(arr) {
  let stack = [];
  for (let i of arr) {
    if (stack[stack.length - 1] === i) continue;
    else stack.push(i);
  }
  return stack;
}
