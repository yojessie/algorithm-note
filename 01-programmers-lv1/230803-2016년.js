// 연습문제 - 2016년
// https://school.programmers.co.kr/learn/courses/30/lessons/12901

// 2023-08-03
function solution(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const idx = new Date(`2016-${a}-${b}`).getDay();
  return day[idx];
}
solution();
