//$ https://app.codility.com/demo/results/trainingJ6CN3X-K52/

function solution(A) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length - 2; i++) {
    let p = A[i],
      q = A[i + 1],
      r = A[i + 2];

    if (p + q > r && q + r > p && r + p > q) {
      return 1;
    }
  }

  return 0;
}
