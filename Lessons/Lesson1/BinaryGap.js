//$ https://app.codility.com/demo/results/trainingWJU23Y-NWF/

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let binary = N.toString(2),
    zeros = 0,
    max = 0;

  for (let bit of binary) {
    if (bit === "0") {
      zeros++;
    } else {
      max = Math.max(max, zeros);
      zeros = 0;
    }
  }

  return max;
}
