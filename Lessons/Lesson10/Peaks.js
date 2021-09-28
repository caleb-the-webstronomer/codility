//$ https://app.codility.com/demo/results/trainingRZ7NRV-76F/

function solution(A) {
  let N = A.length;
  let peaks = [];

  for (let i = 1; i < N - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) peaks.push(i);
  }

  for (let size = N; size >= 1; size--) {
    if (N % size === 0) {
      let bsize = parseInt(N / size);
      let blockz = 0;
      for (let no of peaks) {
        if (parseInt(no / bsize) === blockz) {
          blockz++;
        }
      }

      if (blockz === size) {
        return size;
      }
    }
  }
  return 0;
}
