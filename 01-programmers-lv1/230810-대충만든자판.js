// 연습문제 - 대충 만든 자판
// https://school.programmers.co.kr/learn/courses/30/lessons/160586

// 2023-08-10
function solution(keymap, targets) {
  let result = [];
  let key = {};
  for (let i of keymap) {
    [...i].map((j, idx) => {
      if (key[j]) key[j] = Math.min(key[j], idx + 1);
      else key[j] = idx + 1;
    });
  }
  for (let i of targets) {
    let count = 0;
    for (let j of i) {
      if (!key[j]) {
        count = -1;
        break;
      } else count += key[j];
    }
    result.push(count);
  }
  return result;
}

// reduce를 써보려다 뭔가 잘 안돼서 결국 답안을 이렇게 냈는데
// 다른풀이에서 reduce로 깔끔하게 잘 풀어내셔서 코드를 다시 짜보았다.

function solution(keymap, targets) {
  let result = [];
  let key = {};

  for (let i of keymap) {
    [...i].map((v, idx) => {
      if (!key[v]) key[v] = idx + 1;
      else key[v] = Math.min(key[v], idx + 1);
    });
  }
  for (let i of targets) {
    result.push([...i].reduce((acc, cur) => (acc += key[cur]), 0) || -1);
  }
  return result;
}

// 마지막 reduce 부분에서 [null]로 나오는 부분을 잡지 못했는데
// 이렇게 처리할 수 있다니.. 어떻게 되는건지 아직 잘 모르겠다.
