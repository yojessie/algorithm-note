// 2023-08-13
// 완전탐색 > 카펫
// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  const sum = brown + yellow;
  const divisors = new Array(sum)
    .fill()
    .map((x, i) => i + 1)
    .filter((x) => sum % x === 0);

  for (const n of divisors) {
    const outline = n * 2 + (sum / n - 2) * 2;
    if (outline === brown) return [sum / n, n];
  }
}

// 와.. 문제 하나로 아주 많은 것을 배웠다.
// 다시 수정해본 코드를 통해 아래의 내용들을 배울 수 있었다.

// 1. 좋은 코드일수록 앞부분만 읽어도 쉽게 이해가 된다.
// 2. 풀이 단계가 섞여있는 짧은 코드보다, 단계가 명확하게 보이는 지역적인 코드가 좋은 코드다.
// 부분만 봐도 쉽게 이해될 수 있도록 해야한다.
// 3. arr등의 아무 의미없는 변수명 보다, 변수명만 봐도 오른쪽 코드가 어떤 동작을 할지 예측 가능한 것이 좋다.
// 임의 값이 필요할때는 xs, ys, zs 등 '임의의 값 들' 정도로 써볼 수 있겠다.
// 4. 메소드를 사용할때 하려는 동작의 의미에 더 잘맞는 메소드를 활용하자.
// 가령 처음에 for문으로 약수를 구한것 보다 filter를 통해 수열에서 약수가되는 수를 걸러낸다는 의미가 맞아 더 적합하다.
// 5. 변수 선언시에도 최대한 const를 활용하는 습관을 들이자.
