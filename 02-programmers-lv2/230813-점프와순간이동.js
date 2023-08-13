// Summer/Winter Coding(~2018) - 점프와 순간 이동
// https://school.programmers.co.kr/learn/courses/30/lessons/12980

// 2023-08-13

function solution(n) {
  let result = 0;
  let now = n;
  while (now !== 0) {
    if (now % 2 === 1) {
      now--;
      result++;
    }
    now /= 2;
  }
  return result;
}

// 최소로 이동하는 경우의수를 찾기위해
// 최대한 2배 인덱스 자리로 순간이동하는 경우를 활용해야한다
// 도착 인덱스에서 2로 나누다가 홀수가 등장하면
// 한칸 이동 후 건전지사용을(result) +1 해서 결과를 구한다.
