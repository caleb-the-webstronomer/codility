//$ https://app.codility.com/demo/results/trainingSZF55A-A4B/

function solution(A) {
  if (A.length <= 2) return 0;
  var peaks = [];
  var size = 0;
  for (var i = 1; i < A.length - 1; ++i) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peaks[size] = i;
      ++size;
    }
  }

  if (size <= 2) return size;

  var maxFlag = parseInt(
    Math.sqrt(peaks[size - 1] - peaks[0]) + 1
  );

  for (var i = maxFlag; i >= 2; --i) {
    var count = 1;
    var curPos = peaks[0];
    for (var j = 1; j < size; ++j) {
      if (curPos + i <= peaks[j]) {
        curPos = peaks[j];
        ++count;
      }
    }
    if (count >= i) return i;
  }

  return 2;
}
