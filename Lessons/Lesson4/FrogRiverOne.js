//$ https://app.codility.com/demo/results/trainingCBARBU-MD3/

function solution(X, A) {
  let i = 0,
    j = -1,
    a = [],
    b = X - 1,
    c = [...Array(X + 1).keys()];
  let d = new Set(c);
  for (i; i < A.length; i++) {
    if (d.has(A[i])) d.delete(A[i]);
    if (d.size == 1) {
      j = i;
      break;
    }
  }
  return j;
}
