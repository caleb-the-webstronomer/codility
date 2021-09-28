//$ https://app.codility.com/demo/results/trainingXTQHDW-WRT/

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function sameFactors(a, b) {
  let gcdAB = gcd(a, b);
  let gcdA = 0,
    gcdB = 0;
  while (gcdA !== 1) {
    gcdA = gcd(a, gcdAB);
    a /= gcdA;
  }
  while (gcdB !== 1) {
    gcdB = gcd(B, gcdAB);
    b /= gcdB;
  }
  return a === 1 && b === 1 ? true : false;
}

function solution(A, B) {
  let count = 0;
  for (let i in A) {
    if (sameFactors(A[i], B[i])) count++;
  }
  return count;
}
