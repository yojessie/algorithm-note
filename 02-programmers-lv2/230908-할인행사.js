// 연습문제 - 할인행사
// https://school.programmers.co.kr/learn/courses/30/lessons/131127

// 2023-09-08 : 리팩토링
function solution(want, number, discount) {
  let result = 0;

  function itemChecker(tenDays) {
    let flag = true;
    for (let idx = 0; idx < want.length; idx++) {
      const itemCount = tenDays.filter((item) => item === want[idx]).length;
      const wantCount = number[idx];
      if (itemCount !== wantCount) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  for (let i = 0; i <= discount.length - 10; i++) {
    const tenDays = discount.slice(i, i + 10);
    if (itemChecker(tenDays)) result += 1;
  }
  return result;
}
solution();
