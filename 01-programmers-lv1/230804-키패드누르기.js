// 2020 카카오 인턴십 - 키패드 누르기
// https://school.programmers.co.kr/learn/courses/30/lessons/67256

// 2022-09-05
function solution(numbers, hand) {
  function distance(from, to) {
    let key = [
      [1, 4, 7, "*"],
      [2, 5, 8, 0],
      [3, 6, 9, "#"],
    ];
    let fromLo = [];
    let toLo = [];

    for (let i = 0; i < key.length; i++) {
      for (let j = 0; j < key[i].length; j++) {
        if (key[i][j] == from) {
          fromLo.push(i, j);
        } else if (key[i][j] == to) {
          toLo.push(i, j);
        } else if (from == to) {
          fromLo.push(0, 0);
          toLo.push(0, 0);
        }
      }
    }

    return Math.abs(fromLo[0] - toLo[0]) + Math.abs(fromLo[1] - toLo[1]);
  }

  let left = "*";
  let right = "#";
  let answer = "";

  for (let i = 0; i < numbers.length; i++) {
    let toLeft = distance(left, numbers[i]);
    let toRight = distance(right, numbers[i]);
    if (numbers[i] % 3 == 1) {
      left = numbers[i];
      answer += "L";
    } else if (numbers[i] % 3 == 0 && numbers[i] !== 0) {
      right = numbers[i];
      answer += "R";
    } else if (toLeft < toRight) {
      left = numbers[i];
      answer += "L";
    } else if (toLeft > toRight) {
      right = numbers[i];
      answer += "R";
    } else {
      if (hand == "left") {
        left = numbers[i];
        answer += "L";
      } else {
        right = numbers[i];
        answer += "R";
      }
    }
  }

  return answer;
}

// 2023-08-04
