// 2018 KAKAO BLIND RECRUITMENT - [1차] 캐시
// https://school.programmers.co.kr/learn/courses/30/lessons/17680#qna

// 2023-09-12 리팩토링
function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];
  for (let city of cities) {
    city = city.toLowerCase();

    const cacheHitIndex = cache.indexOf(city);
    const isCacheHit = cacheHitIndex !== -1;

    if (isCacheHit) {
      answer += 1;
      cache.splice(cacheHitIndex, 1);
    } else {
      if (cache.length === cacheSize) {
        cache.shift();
      }
      answer += 5;
    }

    if (cache.length + 1 <= cacheSize) {
      cache.push(city);
    }
  }

  return answer;
}
console.info(
  solution(0, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ])
);
