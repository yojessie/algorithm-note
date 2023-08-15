// 2019 카카오 개발자 겨울 인턴십 - 크레인 인형뽑기 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/64061

// 2023-08-04
function solution(board, moves) {
  const stack = [];
  let count = 0;
  for (let i = 0; i < moves.length; i++) {
    const now = moves[i] - 1;
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
solution();
