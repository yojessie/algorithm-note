const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getSequence = (n, min, max) => {
  const caseArr = [];
  for (let i = 0; i < n; i++) caseArr.push(getRandomInt(min, max));
  return caseArr.sort((a, b) => a - b);
};

const getIndx = (n) => {
  return [getRandomInt(1, n - 1), getRandomInt(1, n - 1)].sort((a, b) => a - b);
};

const testSequence = getSequence(6, 1, 1000);
const testIdx = getIndx(testSequence.length);

const getK = () => {
  let answer = 0;
  for (let i = testIdx[0]; i <= testIdx[1]; i++) answer += testSequence[i];
  return answer;
};
const testK = getK();

function solution(sequence, k) {
  let result = [];
  let length = 1000000;

  for (let start = 0; start < sequence.length; start++) {
    let sum = 0;
    sum += sequence[start];
    if (sum === k) return [start, start];
    for (let end = start + 1; end < sequence.length; end++) {
      sum += sequence[end];
      if (sum === k) {
        const nowLength = end - start;
        if (nowLength < length) {
          result = [start, end];
          length = nowLength;
        }
      }
    }
  }
  return result;
}

console.log("sequence :", testSequence);
console.log("k :", testK);
console.log("Answer :", testIdx);
console.log("solution :", solution(testSequence, testK));
