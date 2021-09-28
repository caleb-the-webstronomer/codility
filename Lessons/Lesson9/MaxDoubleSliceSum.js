//$ https://app.codility.com/demo/results/training9DFCWM-8EK/

function solution(A) {
  let sum = 0,
    ret = 0,
    consum = 0;

  for (let i = 3; i < A.length; i++) {
    consum = Math.max(consum + A[i - 2], 0);
    sum = Math.max(consum, sum + A[i - 1]);
    ret = Math.max(ret, sum);
  }

  return ret;
}
