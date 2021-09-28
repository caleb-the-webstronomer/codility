//$ https://app.codility.com/demo/results/training6Q9T6C-RWN/

function solution(A) {
  var zeroesCount = 0;
  var pairs = 0;

  for (var i = 0; i < A.length; i++) {
    A[i] === 0 ? zeroesCount++ : (pairs += zeroesCount);

    if (pairs > 1000000000) {
      return -1;
    }
  }
  return pairs;
}
