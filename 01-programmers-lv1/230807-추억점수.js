// 연습문제 - 추억 점수
// https://school.programmers.co.kr/learn/courses/30/lessons/176963

// 2023-08-07
function solution(name, yearning, photo) {
  let obj = {};
  name.map((v, i) => (obj[v] = yearning[i]));

  return photo.map((v) => {
    let sum = 0;
    v.forEach((name) => {
      if (obj[name] !== undefined) sum += obj[name];
    });
    return sum;
  });
}

// 다른 풀이를 따라해보다가 새로운 걸 배웠다.
function solution(name, yearning, photo) {
  return photo.map((v) =>
    v.reduce((acc, cur) => (acc += yearning[name.indexOf(cur)] ?? 0), 0)
  );
}

// 마지막 삼항연산자 표현에서 ??는 null 병합 연산자라고 한다.
// A ?? B
// A가 null이나 undefined라면 B를 반환하고, 그렇지 않으면 A를 반환한다.
