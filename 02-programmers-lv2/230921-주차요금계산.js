// 2022 KAKAO BLIND RECRUITMENT - 주차 요금 계산
// https://school.programmers.co.kr/learn/courses/30/lessons/92341

// 2023-09-21
function solution(fees, records) {
  records = records.map((x) => x.split(" ")).sort((a, b) => a[1] - b[1]);

  const parkingRecords = new Map();
  for (const record of records) {
    let time = record[0].split(":").map(Number);
    time = time[0] * 60 + time[1];
    const number = record[1];

    const getNumber = parkingRecords.get(number);
    if (!getNumber) {
      parkingRecords.set(number, [time]);
    } else getNumber.push(time);
  }

  const answer = [];
  const [basicMin, basicFee, unitMin, unitFee] = fees;
  const lastOut = 23 * 60 + 59;
  for (const record of parkingRecords.values()) {
    if (record.length % 2 === 1) record.push(lastOut);
    let parkingMin = 0;
    record.map((min, i) =>
      i % 2 === 0 ? (parkingMin -= min) : (parkingMin += min)
    );

    if (parkingMin <= basicMin) answer.push(basicFee);
    else
      answer.push(
        basicFee + Math.ceil((parkingMin - basicMin) / unitMin) * unitFee
      );
  }
  return answer;
}
console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);
