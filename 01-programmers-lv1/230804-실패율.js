// 2019 KAKAO BLIND RECRUITMENT - 실패율
// https://school.programmers.co.kr/learn/courses/30/lessons/42889

// 2023-08-04
// 이 문제를 풀다가 배운 것
function test(n, stages) {
  const answer = new Array(n).fill([0, 0]);
  for (const i of stages) {
    if (i > n) answer[n - 1][1] += 1;
    else answer[i - 1][1] += 1;
  }
}
test();
// 처음에 각 스테이지에 있는 유저의 수를 카운트하기위해
// 배열을 만들어놓고 카운트하려는데 자꾸 모든 요소에 다같이 카운트가 되어버렸다.
// 고민하다보니 fill은 얕은복사를 하는가에 대해 찾아봤다.
// 역시나..
// 코어자바스크립트 읽으면서 데이터타입에 대해 공부한 덕분에 추측해볼 수 있었다.
function solution(n, stages) {
  const arr = Array.from({ length: n }, (v, i) => [i + 1, 0]);
  for (const i of stages) {
    if (i > n) continue;
    else arr[i - 1][1] += 1;
  }

  const player = stages.length;
  let left = 0;
  for (const i of arr) {
    const temp = i[1];
    i[1] /= player - left;
    left += temp;
  }
  arr.sort((a, b) => b[1] - a[1]);

  return arr.map((x) => x[0]);
}
solution();
