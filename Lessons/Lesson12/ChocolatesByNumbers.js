//$ https://app.codility.com/demo/results/trainingYZP2TD-CB5/

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return a * (b / gcd(a, b));
}

function solution(N, M) {
  return lcm(N, M) / M;
}
