// 해시 - 포켓몬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845

// 2023-08-03
function solution(nums) {
  const half = nums.length / 2;
  const available = new Set(nums).size;
  return half <= available ? half : available;
}
solution();
