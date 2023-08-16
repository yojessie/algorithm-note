// 정렬 - H-Index
// https://school.programmers.co.kr/learn/courses/30/lessons/42747

// 2023-08-15
function solution(citations) {
  let h = Math.max(...citations);
  while (h > 0) {
    const greater = citations.filter((v) => v >= h).length;
    if (h > greater) h -= 1;
    else return h;
  }
  return 0;
}
solution();

// 최대한 max값을 구해야하므로 비교는 max부터 시작
// max보다 크거나 같은 요소의 갯수를 구해서
// 갯수가 h보다 작으면 h값을 하나씩 줄이면서 확인
// 계속 마지막 케이스가 실패로 떠서 고민했는데
// 마지막에 예외처리용 return 0을 추가하니 해결되었다.
