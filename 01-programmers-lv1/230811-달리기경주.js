// 연습문제 - 달리기경주
// https://school.programmers.co.kr/learn/courses/30/lessons/178871

// 2023-08-11
function solution(players, callings) {
  for (let name of callings) {
    let idx = players.indexOf(name);
    let temp = players[idx];
    players[idx] = players[idx - 1];
    players[idx - 1] = temp;
  }
  return players;
}
// 이렇게 쉽게 풀려고 했다가 시간초과로 실패
// indexOf를 빼고 다시 해봐야할 것 같았다.

function solution(players, callings) {
  let myMap = new Map();
  players.map((v, i) => myMap.set(v, i));

  for (let name of callings) {
    let idx = myMap.get(name);
    let frontP = players[idx - 1];
    players[idx - 1] = name;
    players[idx] = frontP;
    myMap.set(name, idx - 1);
    myMap.set(frontP, idx);
  }

  return players;
}

// 이름을 키값으로 하는 Map을 생성한다
// 불려진 이름에 반복문을 돌리는데
// 해당 이름의 인덱스를 map에서 잡아오고
// 앞선수의 이름은 배열에서 잡아온다
// 잡아온 값들을 배열과 Map에 모두 업데이트 해준다

// 등수 변화에 따라 어떻게 이름의 순서들을 바꿔줄지 고민하는데 오래걸렸다.
// Map을 만들어서 이름을 키값으로 셋팅해서 활용했다.
// 근데 결국 Map과 players 배열 두개 다 변화를 업데이트 해줘야해서
// 이게 맞나 싶었지만 일단 성공..
