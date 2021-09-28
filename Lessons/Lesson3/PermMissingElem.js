//$ https://app.codility.com/demo/results/trainingRTW4YP-MAQ/

function solution(A) {
  var size = A.length;
  var sum = ((size + 1) * (size + 2)) / 2;
  for (i = 0; i < size; i++) {
    sum -= A[i];
  }
  return sum;
}
