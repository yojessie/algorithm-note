// 연습문제 - 연속된 부분 수열의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/178870

// 2023-08-17
function solution(sequence, k) {
  let result = [];
  let sum = 0;

  for (let i = sequence.length - 1; i >= 0; i--) {
    // 큰 수 부터 확인
    if (sequence[i] === k) return [i, i];
    // k값이 수열에 있으면 인덱스 바로 리턴
    sum = sequence[i];
    // 현재 수를 sum에 할당하고
    for (let j = i - 1; j >= 0; j--) {
      sum += sequence[j];
      // 이전 인덱스 값들을 하나씩 더해본다
      if (sum > k) break;
      // 만약 sum이 k값을 넘어가면 반복 종료
      else if (sum === k) {
        result = [j, i];
        break;
        // sum값이 k랑 같으면 인덱스 저장하고 break
      }
    }
    if (result.length !== 0 && sequence[i] !== sequence[i - 1]) return result;
    // 저장된 result값이 있고
    // i값과 i이전값이 같은 수가 아니면 바로 return
    // i와 i이전값이 같으면 최대한 앞 인덱스를 구하기위해 반복
  }
  return result;
}
solution();

// 대략 이런 과정으로 풀이하려고 이런저런 테스트를 시도해봤으나
// 계속 실패하는 케이스들이 있었다.
// 몇시간이 지나도 도저히 해결되지 않아서 질문게시판을 보다가
// 이건 투포인터 알고리즘으로 푸는 문제이고, 그걸 모르고 복잡한 코드를 짜는것은 별 의미가 없다는 댓글을 봤다.
// 특정 합을 가지는 부분연속 수열 찾는 것이 투포인터 알고리즘의 대표적 유형이라고 한다.
// 공부후에 다시 코드를 작성해봤는데.. 정말 별의 별 방법으로 수정해봐도 시간초과의 벽을 넘을 수 없었다..

function solution2(sequence, k) {
  let result = [];
  let length = 1000000;
  let sum = 0;

  for (let start = 0; start < sequence.length; start++) {
    let end = start;
    sum = sequence[start];

    while (sum <= k && end < sequence.length) {
      if (sum === k) {
        const nowLength = end - start;
        if (nowLength < length) {
          result = [start, end];
          length = nowLength;
        }
      }
      end += 1;
      sum += sequence[end];
    }
  }
  return result;
}
solution2();

// 또 몇시간이 흐르고 흘러서 힌트만 얻어볼 요량으로 질문 게시판을 기웃거리다
// 누적합으로 풀어볼 수 있다는 글을 보고 시도해서 아래의 코드로 통과했다.

function solution3(sequence, k) {
  let result = [];
  let length = 1000000;

  const prefix = [0];
  sequence.map((n, i) => prefix.push(prefix[i] + n));

  let start = 0;
  let end = 0;

  while (start <= end) {
    const sum = prefix[end] - prefix[start];
    if (sum === k) {
      const nowLength = end - 1 - start;
      if (nowLength < length) {
        result = [start, end - 1];
        length = nowLength;
      }
    }
    if (sum < k) end += 1;
    else start += 1;
  }
  return result;
}
solution3();

// 근데 누적합 없이도 풀수 있지 않았을까 해서 아쉬웠다.
// 다른사람 풀이를 보고 선형시간 내에 해결해야한다는게 뭔지, 포인터를 어떻게 운용해야하는지 좀 알게되어서 다시 풀었다.

function solution4(sequence, k) {
  let result = [];
  let length = 1000000;
  let start = 0;
  let end = 0;
  let sum = sequence[start];

  while (end < sequence.length) {
    if (sum < k) {
      end += 1;
      sum += sequence[end];
    } else {
      if (sum === k) {
        const nowLength = end - start;
        if (nowLength < length) {
          result = [start, end];
          length = nowLength;
        }
      }
      sum -= sequence[start];
      start += 1;
    }
  }
  return result;
}
solution4();
