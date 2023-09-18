// 해시 - 전화번호 목록
// https://school.programmers.co.kr/learn/courses/30/lessons/42577

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
