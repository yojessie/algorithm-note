// 해시 - 의상
// https://school.programmers.co.kr/learn/courses/30/lessons/42578

// 2023-09-10
function solution(clothes) {
  let result = 1;
  const clothMap = new Map();
  for (const [name, type] of clothes) {
    if (clothMap.get(type)) clothMap.get(type).push(name);
    else clothMap.set(type, [name]);
  }

  for (const [, nameArr] of clothMap) {
    result *= nameArr.length + 1;
  }
  return result - 1;
}
solution();
