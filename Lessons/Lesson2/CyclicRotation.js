//$ https://app.codility.com/demo/results/trainingDAYD77-EDJ/

function solution(A, K) {
  if (A.length === K || K === 0 || A.length === 0) {
    return A;
  }
  for (let i = 0; i < K; i++) {
    let element = A.pop();
    A.unshift(element);
  }
  return A;
}
