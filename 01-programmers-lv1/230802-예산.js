// Summer/Winter Coding(~2018) - 예산
// https://school.programmers.co.kr/learn/courses/30/lessons/12982

// 2022-08-29
function solution(d, budget) {
  let arr = d.sort((a, b) => a - b);
  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    temp += arr[i];

    if (temp > budget) {
      return i;
    } else if (temp == budget) {
      return i + 1;
    }
  }
}

// 2023-08-02
function solution(d, budget) {
  let count = 0;
  let sum = 0;
  let arr = d.sort((a, b) => a - b);
  for (let i of arr) {
    sum += i;
    count++;
    if (budget === sum) return count;
    else if (budget < sum) return count - 1;
  }
  return d.length;
}
