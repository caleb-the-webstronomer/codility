//$ https://app.codility.com/demo/results/trainingN989ZS-MV5/

function solution(A) {
  let max_sum = (sub_sum = A[0]);
  for (let i = 1; i < A.length; i++) {
    sub_sum = Math.max(sub_sum + A[i], A[i]);
    max_sum = Math.max(max_sum, sub_sum);
  }
  return max_sum;
}
