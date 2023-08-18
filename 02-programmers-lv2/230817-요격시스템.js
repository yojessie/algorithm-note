// 연습문제 - 요격 시스템
// https://school.programmers.co.kr/learn/courses/30/lessons/181188

// 2023-08-17
function solution(targets) {
  targets.sort((a, b) => a[1] - b[1]);
  let result = 1;
  let now = targets[0][1] - 1;
  for (const i of targets) {
    if (now >= i[0] && now < i[1]) continue;
    else {
      now = i[1] - 1;
      result += 1;
    }
  }
  return result;
}
solution();

// 폭격미사일들을 먼저 정렬한다.
// s값 이상, e값 미만이 한 범위에 들어오는 경우를 묶을것이기 때문에
// e값 기준으로 정렬한다.
// 처음 요격기 값은 맨앞 미사일 e값을 기준으로 잡고
// 한 범위에 있으면 패스, 범위를 벗어나면 새로운 e값을 now로 잡는다
// 하지만 e값 자체는 요격좌표가 될 수 없기때문에 -1한 값을 저장한다.
// 새로운 요격기 카운트를 위해 result값을 추가한다.

// 반례찾는 연습이 필요할 것 같은데 잘 안되는 중.
