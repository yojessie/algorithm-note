// 해시 - 의상
// https://school.programmers.co.kr/learn/courses/30/lessons/42578

// 2023-09-12 리팩토링
function solution(clothes) {
  let result = 1;
  const clothMap = new Map();
  for (const [name, type] of clothes) {
    let cloth = clothMap.get(type);
    if (cloth === undefined) {
      cloth = [];
      clothMap.set(type, cloth);
    }
    cloth.push(name);
  }

  for (const [, clothGroup] of clothMap) {
    result *= clothGroup.length + 1;
  }
  return result - 1;
}
solution();
