// 2021 Dev-Matching: 웹 백엔드 개발자(상반기) - 로또의 최고 순위와 최저 순위
// https://school.programmers.co.kr/learn/courses/30/lessons/77484

// 2022-09-08
function solution(lottos, win_nums) {
  let miss = win_nums.filter((x) => !lottos.includes(x));

  for (let i = 0; i < miss.length; i++) {
    for (let j = 0; j < lottos.length; j++) {
      if (lottos[j] == 0) {
        lottos[j] = miss[i];
        break;
      }
    }
  }

  let winRank = 7 - win_nums.filter((x) => lottos.includes(x)).length;
  let loseRank = 7 - (6 - miss.length);

  if (winRank > 6) winRank = 6;
  if (loseRank > 6) loseRank = 6;

  let answer = [winRank, loseRank];

  return answer;
}

// 2023-08-04
function solution(lottos, win_nums) {
  let count = 0;
  let hide = 0;
  for (let i of lottos) {
    if (win_nums.includes(i)) count++;
    else if (i === 0) hide++;
  }
  let rank = [6, 6, 5, 4, 3, 2, 1];
  return [rank[count + hide], rank[count]];
}
