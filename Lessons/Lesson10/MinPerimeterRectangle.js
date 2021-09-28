//$ https://app.codility.com/demo/results/trainingJCJDT8-SAE/

function solution(N) {
  for (var i = parseInt(Math.sqrt(N), 10); true; i--) {
    if (N % i == 0) return 2 * i + 2 * (N / i);
  }
}
