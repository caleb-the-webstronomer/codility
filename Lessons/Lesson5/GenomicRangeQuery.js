//$ https://app.codility.com/demo/results/trainingDR96KD-2VQ/

function solution(S, P, Q) {
  let a = "",
    b = [];
  for (let i = 0; i < P.length; i++) {
    a = S.slice(P[i], Q[i] + 1);
    if (a.includes("A")) b.push(1);
    else if (a.includes("C")) b.push(2);
    else if (a.includes("G")) b.push(3);
    else b.push(4);
  }
  return b;
}
