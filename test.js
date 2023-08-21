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

const testSequence = getSequence(10, -100, 100);
const testIdx = getIndx(testSequence.length);

// 생성한 인덱스의 합계
const getK = () => {
  let answer = 0;
  for (let i = testIdx[0]; i <= testIdx[1]; i++) answer += testSequence[i];
  return answer;
};
const testK = getK();

// 부분 수열의 합계 구하기
function solution(sequence, k) {
  let result = [];
  let length = 1000000;
  let sum = 0;

  for (let start = 0; start < sequence.length; start++) {
    let end = start;
    sum = sequence[start];

    while (end < sequence.length) {
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

console.log(`sequence : [${testSequence}]`);
console.log(`k : ${testK}`);
console.log(solution(testSequence, testK));
console.log(`Answer : [${testIdx}]`);
