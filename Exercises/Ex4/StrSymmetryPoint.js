//$ https://app.codility.com/demo/results/trainingKGDEYY-HJE/

function solution(S) {
  if (S.length === 1) {
    return 0;
  } else if (S.length % 2 === 0) {
    return -1;
  } else {
    let ans = Math.floor(S.length / 2);
    let zzz = isPal(S);
    return isPal(S) ? ans : -1;
  }
}

function isPal(w) {
  for (let i = 0, j = w.length - 1; i < j; i++, j--) {
    if (w[i] !== w[j]) {
      return false;
    }
  }
  return true;
}
