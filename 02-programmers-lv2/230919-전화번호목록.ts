// 해시 - 전화번호 목록
// https://school.programmers.co.kr/learn/courses/30/lessons/42577

// 2023-09-19 - 리팩토링
export function solution(phone_book: string[]) {
  phone_book.sort();

  for (let i = 1; i < phone_book.length; i++) {
    if (phone_book[i].startsWith(phone_book[i - 1])) return false;
  }
  return true;
}
