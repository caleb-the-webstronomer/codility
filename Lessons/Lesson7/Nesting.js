//$ https://app.codility.com/demo/results/trainingPGPT3B-CC4/

function solution(S) {
  let a = 0,
    i = 0;

  for (i; i < S.length; i++) {
    a = S[i] === "(" ? a + 1 : a - 1;

    if (a < 0) return 0;
  }

  return a === 0 ? 1 : 0;
}
