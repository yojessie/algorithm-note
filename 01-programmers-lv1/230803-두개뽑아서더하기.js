// 월간 코드 챌린지 시즌1 - 두개 뽑아서 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/68644

// 2022-08-28
function solution(numbers) {
  let num = [];
  let temp = 1;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = temp; j < numbers.length; j++) {
      num.push(numbers[i] + numbers[j]);
    }
    temp++;
  }

  return [...new Set(num)].sort((a, b) => a - b);
}

// 2023-08-03
function solution(numbers) {
  let answer = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.add(numbers[i] + numbers[j]);
    }
  }
  return [...answer].sort((a, b) => a - b);
}
