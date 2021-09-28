//$ https://app.codility.com/demo/results/trainingQBC57E-753/

function solution(A) {
  const nSet = new Set(A);
  let n = 1;

  while (nSet.has(n)) {
    n++;
  }

  return n;
}

function solution(A) {
  let set = new Set(A);

  for (let i = 1; true; i++) {
    if (!set.has(i)) return i;
  }
}
