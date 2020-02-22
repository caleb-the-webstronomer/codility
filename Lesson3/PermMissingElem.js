//app.codility.com/demo/results/trainingRTW4YP-MAQ/

https: function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  var size = A.length;
  var sum = ((size + 1) * (size + 2)) / 2;
  for (i = 0; i < size; i++) {
    sum -= A[i];
  }
  return sum;
}
