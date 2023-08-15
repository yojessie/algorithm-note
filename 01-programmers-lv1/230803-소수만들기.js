// Summer/Winter Coding(~2018) - 소수 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12977

// 2023-08-03
// 전에는 무려 3중 반복문으로 풀었던걸 이제 조합 공식으로 풀 수 있었다.
// 근데 조합에서 중복제거를 해야하는 줄 알고 한참 해맸다.
// 이 문제는 중복되는 경우를 제거하라는 말이 없음.. 뭐가 안풀리면 항상 문제를 다시 읽어볼 것.
function solution(nums) {
  function gcb(arr, num) {
    const result = [];
    if (num === 1) return arr.map((x) => [x]);

    arr.forEach((cur, idx, origin) => {
      const rest = origin.slice(idx + 1);
      const com = gcb(rest, num - 1);
      const attached = com.map((e) => [cur, ...e]);
      result.push(...attached);
    });
    return result;
  }
  const sum = gcb(nums, 3)
    .map((x) => x.reduce((acc, cur) => acc + cur))
    .sort((a, b) => a - b);

  let answer = sum.length;
  for (const i of sum) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        answer--;
        break;
      }
    }
  }
  return answer;
}
solution();
