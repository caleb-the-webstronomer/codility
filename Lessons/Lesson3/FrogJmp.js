//$ https://app.codility.com/demo/results/trainingBT2TNG-JE4/

function solution(X, Y, D) {
  let a = Y - X;
  let b = Math.floor(a / D);
  let c = a % D;

  return c == 0 ? b : b + 1;
}
