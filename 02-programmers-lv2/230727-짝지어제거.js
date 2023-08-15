// 2023-07-27
// 프로그래머스 - 짝지어 제거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
  const stack = [];

  for (const i of s) {
    if (stack.at(-1) === i) stack.pop();
    else stack.push(i);
  }

  return stack.length === 0 ? 1 : 0;
}
solution();

// 위 코드로 효율성에서 하나 틀려서 고민했는데
// 비교연산자를 ===로 바꿨더니 통과... 이유가 뭘까?
// 전에도 프로그래머스에서 문제를 풀때 효율성 관련해서
// const 와 let을 철저하게 구분해서 사용하는 것과
// 비교연산자를 ==가 아닌 ===로 사용했을때 결과 차이나는 경우가 종종 있었다.

// 아래가 통과한 풀이
function solution2(s) {
  const stack = [];

  for (const i of s) {
    if (stack.at(-1) === i) stack.pop();
    else stack.push(i);
  }

  return stack.length === 0 ? 1 : 0;
}
solution2();

// 비교연산자를 사용할때는 === 를 사용하는 것이 좋다.
// == 비교에는 여러가지 예외사항들이 있다.
// ex. 숫자 0과 문자0, 빈 배열을 같게 취급하는 등..

// const 와 let에 대해서도 가능한 const를 사용하고
// 데이터가 바뀌어야 하는값만 let을 사용해 주는게 좋다.
