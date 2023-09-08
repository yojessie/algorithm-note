// 연습문제 - 할인행사
// https://school.programmers.co.kr/learn/courses/30/lessons/131127

// 2023-09-08 : 리팩토링
function solution(want, number, discount) {
  let result = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    const tenDays = discount.slice(i, i + 10);
    let flag = true;
    for (let idx = 0; idx < want.length; idx++) {
      const itemCount = tenDays.filter((item) => item === want[idx]).length;
      const wantCount = number[idx];
      if (itemCount !== wantCount) {
        flag = false;
        break;
      }
    }
    if (flag) result += 1;
  }
  return result;
}
solution();
