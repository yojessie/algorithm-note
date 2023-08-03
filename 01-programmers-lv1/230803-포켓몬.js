// 해시 - 포켓몬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845

// 2022
function solution(nums) {
  let half = nums.length / 2;
  let deleteRepeat = new Set(nums).size;

  return deleteRepeat > half ? half : deleteRepeat;
}

// 2023-08-03
function solution(nums) {
  let half = nums.length / 2;
  let available = new Set(nums).size;
  return half <= available ? half : available;
}
