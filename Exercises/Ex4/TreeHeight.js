//$ https://app.codility.com/demo/results/training5TA2QC-P2R/

function solution(T) {
  let l1 = 0;
  let l2 = 0;

  if (T.l != null) {
    l1 = 1 + solution(T.l);
  }
  if (T.r != null) {
    l2 = 1 + solution(T.r);
  }

  return l1 > l2 ? l1 : l2;
}
