//$ https://app.codility.com/demo/results/trainingNXUJT8-TD8/

function solution(A) {
  let len = 1;
  let pointer = 0;

  while (A[pointer] !== -1) {
    pointer = A[pointer];
    len++;
  }

  return len;
}
