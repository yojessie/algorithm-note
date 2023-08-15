// 월간 코드 챌린지 시즌1 - 두개 뽑아서 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/68644

// 2023-08-03
function solution(numbers) {
  const answer = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.add(numbers[i] + numbers[j]);
    }
  }
  return [...answer].sort((a, b) => a - b);
}
solution();
