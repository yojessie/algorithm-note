// 2018 KAKAO BLIND RECRUITMENT - [1차] 캐시
// https://school.programmers.co.kr/learn/courses/30/lessons/17680#qna

// 2023-09-07
function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  let answer = 0;
  const cityStack = [];
  for (let city of cities) {
    city = city.toLowerCase();
    answer += cityStack.includes(city) ? 1 : 5;

    if (cityStack.includes(city)) {
      cityStack.splice(cityStack.indexOf(city), 1);
    } else if (cityStack.length === cacheSize) {
      cityStack.shift();
    }
    cityStack.push(city);
  }
  return answer;
}
solution(3, [
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
]);
