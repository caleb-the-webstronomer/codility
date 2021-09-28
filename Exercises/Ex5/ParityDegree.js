//$ https://app.codility.com/demo/results/trainingNMU8QK-QS8/

function solution(N) {
  let exp = 0;
  let ans = 0;

  while (Math.pow(2, exp) <= N) {
    if (N % Math.pow(2, exp) === 0) {
      ans = exp;
    }
    exp++;
  }

  return ans;
}
