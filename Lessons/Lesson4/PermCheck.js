//$ https://app.codility.com/demo/results/training5RND3K-KDW/

//$ https://app.codility.com/demo/results/trainingU6TSYQ-DTY/

function solution(A) {
  const found = new Set();
  for (const num of A) {
    if (found.has(num) || num > A.length) {
      return 0;
    }
    found.add(num);
  }
  return 1;
}

function solution(A) {
  var N = A.length;
  var sum = (N * (N + 1)) / 2;
  var tap = [];
  for (var i in A) {
    sum -= A[i];
    if (tap[A[i]]) {
      return 0;
    }
    tap[A[i]] = true;
  }
  return +(sum == 0);
}
