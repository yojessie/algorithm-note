// 2023-08-10
// 영어 끝말 잇기
// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  const wordSet = new Set([words[0]]);

  let failedAt;
  let lastChar = words[0].at(-1);

  for (let i = 1; i < words.length; i++) {
    const word = words[i];

    if (wordSet.has(word) || lastChar !== word[0]) {
      failedAt = i;
      break;
    }
    wordSet.add(word);
    lastChar = word.at(-1);
  }

  return failedAt === undefined
    ? [0, 0]
    : [(failedAt % n) + 1, Math.ceil((failedAt + 1) / n)];
}
solution();

// 멘토님이 주신 개선 코드로 수정한 답안
// lastChar의 첫번째 값을 초기화 하지 않고 0번째부터 시작하면
// lastChar !== words[0] 조건에 걸리기때문에 초기화는 필요한 것 같다.
// 그리고 끝말잇기 종료조건이 나오면 break시켜도 좋을 것 같았다.
// 마지막 i값은 turn값으로 계산이 필요해서 수정했다.

// 전에 비해 answer 배열과 person, turn 변수의 선언 필요없이 필요한 값만 가져와 반영시키는 방향으로 수정되었다.
