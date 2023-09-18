// 깊이/너비 우선 탐색(DFS/BFS) - 타겟 넘버
// https://school.programmers.co.kr/learn/courses/30/lessons/43165

// 2023-09-19
export function solution(phone_book: string[]) {
  phone_book.sort();

  for (let i = 1; i < phone_book.length; i++) {
    if (phone_book[i][0] === phone_book[i - 1][0]) {
      if (phone_book[i].match(phone_book[i - 1])) {
        return false;
      }
    }
  }
  return true;
}
