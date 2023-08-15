// 연습문제 - 바탕화면 정리
// https://school.programmers.co.kr/learn/courses/30/lessons/161990

// 2023-08-11
function solution(wallpaper) {
  const depth1 = [];
  const depth2 = [];
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        depth1.push(i);
        depth2.push(j);
      }
    }
  }
  const lux = Math.min(...depth1);
  const luy = Math.min(...depth2);
  const rdx = Math.max(...depth1) + 1;
  const rdy = Math.max(...depth2) + 1;

  return [lux, luy, rdx, rdy];
}
solution();

// 배열의 1뎁스, 2뎁스 값을 모두 모아놓고
// 제일 위, 왼쪽, 아래, 오른쪽 값을 차례로 구한다
// 다른사람 풀이를 보니 좀 더 간결하게 할 수 있어서 다시 수정해보았다.

// forEach를 사용해서 for문 부분을 좀 더 깔끔하게 정리할 수 있었다.
function solution2(wallpaper) {
  const depth1 = [];
  const depth2 = [];
  wallpaper.forEach((s, i) => {
    [...s].forEach((v, j) => {
      if (v === "#") {
        depth1.push(i);
        depth2.push(j);
      }
    });
  });
  const lux = Math.min(...depth1);
  const luy = Math.min(...depth2);
  const rdx = Math.max(...depth1) + 1;
  const rdy = Math.max(...depth2) + 1;

  return [lux, luy, rdx, rdy];
}
solution2();
