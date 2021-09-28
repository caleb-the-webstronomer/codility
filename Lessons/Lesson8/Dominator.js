//$ https://app.codility.com/demo/results/trainingTVNKV6-7N4/

function solution(A) {
  let a = -1,
    b = {},
    c = 0,
    d = 0,
    e = Math.floor(A.length / 2),
    i = 0;
  for (i; i < A.length; i++) {
    b[A[i]] = (b[A[i]] || 0) + 1;
    if (b[A[i]] > c) {
      c = b[A[i]];
      d = i;
    }
  }
  return c > e ? d : a;
}
