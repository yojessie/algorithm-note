// 연습문제 - 공원산책
// https://school.programmers.co.kr/learn/courses/30/lessons/172928

// 2023-08-12
function solution(park, routes) {
  let dog;
  const range = [park.length, park[0].length];

  function moving(op, n) {
    let check = true;
    if (op === "N") {
      if (dog[0] - n < 0) return;
      for (let i = dog[0] - 1; i >= dog[0] - n; i--) {
        if (park[i][dog[1]] === "X") check = false;
      }
      if (check) dog[0] -= n;
    } else if (op === "S") {
      if (dog[0] + n >= range[0]) return;
      for (let i = dog[0] + 1; i <= dog[0] + n; i++) {
        if (park[i][dog[1]] === "X") check = false;
      }
      if (check) dog[0] += n;
    } else if (op === "W") {
      if (dog[1] - n < 0) return;
      for (let i = dog[1] - 1; i >= dog[1] - n; i--) {
        if (park[dog[0]][i] === "X") check = false;
      }
      if (check) dog[1] -= n;
    } else if (op === "E") {
      if (dog[1] + n >= range[1]) return;
      for (let i = dog[1] + 1; i <= dog[1] + n; i++) {
        if (park[dog[0]][i] === "X") check = false;
      }
      if (check) dog[1] += n;
    }
  }

  routes = routes.map((i) => i.split(" ")).map((i) => [i[0], Number(i[1])]);

  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === "S") dog = [i, j];
    }
  }

  for (const [op, n] of routes) {
    moving(op, n);
  }
  return dog;
}

// 조건이 복잡해서 정말 오래걸렸다
// 그만큼 코드도 복잡한것 같은데.. 시간이 좀 지나서 리팩토링 해봐야겠다.

solution();
