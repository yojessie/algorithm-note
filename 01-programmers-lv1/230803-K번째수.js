// 정렬 - K번째 수
// https://school.programmers.co.kr/learn/courses/30/lessons/42748

// 2022-09-03
function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let start = commands[i][0] - 1;
    let end = commands[i][1];
    let pick = commands[i][2] - 1;
    let sliceArr = array.slice(start, end).sort((a, b) => a - b);

    answer.push(sliceArr[pick]);
  }

  return answer;
}

// 2023-08-03
function solution(array, commands) {
  let answer = [];
  for (let num of commands) {
    let [i, j, k] = num;
    let result = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(result[k - 1]);
  }
  return answer;
}
