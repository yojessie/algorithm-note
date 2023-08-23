const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 길이 n의 배열 생성
const getSequence = (n, min, max) => {
  const caseArr = [];
  for (let i = 0; i < n; i++) caseArr.push(getRandomInt(min, max));
  return caseArr.sort((a, b) => a - b);
};

// 테스트해볼 부분 합계 인덱스 생성
const getIndx = (n) => {
  return [getRandomInt(1, n - 1), getRandomInt(1, n - 1)].sort((a, b) => a - b);
};

const testSequence = getSequence(6, 1, 1000);
const testIdx = getIndx(testSequence.length);

// 생성한 인덱스의 합계
const getK = () => {
  let answer = 0;
  for (let i = testIdx[0]; i <= testIdx[1]; i++) answer += testSequence[i];
  return answer;
};
const testK = getK();

// ⭐️ 부분 수열의 합계 구하기 ⭐️
// ⭐️ 문제를 작은단위로 분해해서 생각할 것 ⭐️

// end는 0부터 마지막까지 하나씩 더하면서 확인한다
// 더한게 k랑 같으면 길이가 더 작은 경우의 인덱스만 답에 덮어씌운다
// 더한게 아직 k보다 작으면 start값은 바꾸지말고 다시 end를 더하도록 반복문의 처음으로 보낸다
// sum이 k를 넘겼을때는 start값을 하나씩 빼본다

function solution(sequence, k) {
  let result = [];
  let length = 1000000;
  let sum = 0;
  let start = 0;

  for (let end = 0; end < sequence.length; end++) {
    sum += sequence[end];
    for (; start <= end; start++) {
      if (sum === k) {
        const nowLength = end - start;
        if (nowLength < length) {
          result = [start, end];
          length = nowLength;
        }
        break;
      } else if (sum < k) {
        break;
      } else sum -= sequence[start];
    }
  }

  return result;
}

console.log("sequence :", testSequence);
console.log("k :", testK);
console.log("Answer :", testIdx);
console.log("solution :", solution(testSequence, testK));
