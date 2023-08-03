// Summer/Winter Coding(~2018) - 소수 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12977

// 2022-09-04
function solution(nums) {
  nums.sort((a, b) => a - b);
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        let temp = [];
        for (let m = 2; m < sum; m++) {
          if (sum % m == 0) {
            temp.push(false);
          }
        }
        if (temp.length == 0) {
          answer++;
        }
      }
    }
  }

  return answer;
}

// 2023-08-03
// 전에는 무려 3중 반복문으로 풀었던걸 이제 조합 공식으로 풀 수 있었다.
// 근데 조합에서 중복제거를 해야하는 줄 알고 한참 해맸다.
// 이 문제는 중복되는 경우를 제거하라는 말이 없음.. 뭐가 안풀리면 항상 문제를 다시 읽어볼 것.
function solution(nums) {
  function gcb(arr, num) {
    let result = [];
    if (num === 1) return arr.map((x) => [x]);

    arr.forEach((cur, idx, arr) => {
      let rest = arr.slice(idx + 1);
      let com = gcb(rest, num - 1);
      let attached = com.map((e) => [cur, ...e]);
      result.push(...attached);
    });
    return result;
  }
  let sum = gcb(nums, 3)
    .map((x) => x.reduce((acc, cur) => acc + cur))
    .sort((a, b) => a - b);

  let answer = sum.length;
  for (let i of sum) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        answer--;
        break;
      }
    }
  }
  return answer;
}
