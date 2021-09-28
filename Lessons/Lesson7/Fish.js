//$ https://app.codility.com/demo/results/trainingSN4G4Z-SBM/

function solution(A, B) {
  let a = 0,
    b = [],
    c = [],
    i = 0;
  for (i; i < A.length; i++) {
    if (B[i] === 0) {
      while (b.length > 0) {
        let e = b.pop();
        if (e > A[i]) {
          b.push(e);
          break;
        }
      }

      if (b.length === 0) {
        c.push(A[i]);
      }
    } else b.push(A[i]);
  }

  return b.length + c.length;
}
