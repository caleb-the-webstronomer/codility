//$ https://app.codility.com/demo/results/trainingHX5VR5-A2Q/

function solution(A) {
  var retval;

  var sumRight = A.reduce(function (pv, cv, idx) {
    return idx > 0 ? pv + cv : 0;
  }, 0);
  var sumLeft = 0;
  var substractions = [];
  var maxI = A.length - 1;

  for (var i = 0; i < maxI; i++) {
    sumLeft += A[i];
    substractions.push(Math.abs(sumLeft - sumRight));
    if (i + 1 <= maxI) sumRight -= A[i + 1];
  }

  return substractions.reduce(function (pv, cv, idx) {
    return idx > 0 ? (pv < cv ? pv : cv) : cv;
  }, 0);
}
