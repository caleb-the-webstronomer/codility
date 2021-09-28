//$ https://app.codility.com/demo/results/trainingC7E6H9-3JS/

function solution(A) {
  let A2 = A.slice().reverse();
  let leftMap = {},
    rightMap = {},
    larr = [],
    rarr = [],
    lead = 0,
    lmax = 0,
    rmax = 0;
  for (let i = 0; i < A.length - 1; i++) {
    let len = i + 1,
      half = Math.floor(len / 2);
    leftMap[A[i]] = (leftMap[A[i]] || 0) + 1;
    rightMap[A2[i]] = (rightMap[A2[i]] || 0) + 1;
    if (leftMap[A[i]] > half) {
      lmax = i;
      larr.push(A[lmax]);
    } else if (leftMap[A[lmax]] > half) larr.push(A[lmax]);
    else larr.push(null);
    if (rightMap[A2[i]] > half) {
      rmax = i;
      rarr.push(A2[rmax]);
    } else if (rightMap[A2[rmax]] > half)
      rarr.push(A2[rmax]);
    else rarr.push(null);
  }
  rarr.reverse();
  for (let i = 0; i < rarr.length; i++) {
    if (
      larr[i] !== null &&
      rarr[i] !== null &&
      larr[i] === rarr[i]
    ) {
      lead++;
    }
  }

  return lead;
}
