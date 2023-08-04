// 2019 카카오 개발자 겨울 인턴십 - 크레인 인형뽑기 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/64061

// 2022-09-04
function solution(board, moves) {
  let arr = [];
  let answer = 0;
  for (let i = 0; i < moves.length; i++) {
    let pick = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][pick] !== 0) {
        arr.push(board[j][pick]);
        board[j][pick] = 0;
        break;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      answer += 2;
      arr.splice(i, 2);
      i = -1;
    }
  }

  return answer;
}

// 2023-08-04
function solution(board, moves) {
  let stack = [];
  let count = 0;
  for (let i = 0; i < moves.length; i++) {
    let now = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][now] !== 0) {
        if (stack.at(-1) === board[j][now]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(board[j][now]);
        }
        board[j][now] = 0;
        break;
      }
    }
  }
  return count;
}
