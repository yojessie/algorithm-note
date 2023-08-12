// 연습문제 - 햄버거 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/133502

// 2023-08-11
function solution(ingredient) {
  let result = 0;
  let stack = "";
  for (let i of ingredient) {
    stack += i;
    if (stack.match(/1231/)) {
      stack = stack.replace(/1231/, "");
      result++;
    }
  }
  return result;
}

// 처음엔 전체에서 replace를 반복 실행했는데
// 시간초과에 걸려서 다른 방식이 필요했다.
// ingredient의 값을 하나씩 넣으면서 그때그때 확인하고
// match 되는 값을 제거해나가는 식으로 해결했다.

// 그래도 시간초과
// match, replace, slice 이리바꾸고 저리바꿔서 시도해봐도 안된다.
// 혹시나 하는 마음에 stack을 배열로 바꾸고 push, pop 처리를 했는데
// 통과.......뭐지??
// 문자열보다 배열의 처리가 더 빠르다..

function solution(ingredient) {
  let result = 0;
  let stack = [];
  for (let i of ingredient) {
    stack.push(i);
    if (stack.slice(-4).join("") === "1231") {
      for (let i = 0; i < 4; i++) stack.pop();
      result++;
    }
  }
  return result;
}
