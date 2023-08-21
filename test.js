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
const testIdx = getIndx(10);

// 생성한 인덱스의 합계
const getK = () => {
  let answer = 0;
  for (let i = testIdx[0]; i <= testIdx[1]; i++) answer += testSequence[i];
  return answer;
};

const testk = getK();

// 부분 수열의 합계 구하기
function solution(sequence, k) {
  let result = [];
  let length = 1000000;
  let start = 0;
  let end = 0;
  let sum = sequence[start];

  while (end < sequence.length) {
    if (sum === k) {
      const nowLength = end - start;
      if (nowLength < length) {
        result = [start, end];
        length = nowLength;
      }
    }
    if (sum < 0 && sequence[end] < 0) {
      // 합계값이 음수고, 지금 더해서 비교할 수가 음수이면 음수용 처리
      if (sum > k) {
        end += 1;
        sum -= Math.abs(sequence[end]);
      } else {
        sum += Math.abs(sequence[start]);
        start += 1;
      }
    } else {
      // 그 외 양수용 처리, sum이 양수로 넘어가는 경우 비교를 반대로 해야하기 때문에
      if (sum < k) {
        end += 1;
        sum += sequence[end];
      } else {
        sum -= sequence[start];
        start += 1;
      }
    }
  }
  return result;
}
console.log(solution(testSequence, testk));
console.log(`The answer is : [${testIdx}]`);
