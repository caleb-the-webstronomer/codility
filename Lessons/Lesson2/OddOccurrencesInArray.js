//$ https://app.codility.com/demo/results/training43JSU3-G28/

function solution(A) {
  let result = 0;

  for (let element of A) {
    // Apply Bitwise XOR to the current and next element
    result ^= element;
  }

  return result;
}
