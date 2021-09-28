//$ https://app.codility.com/demo/results/trainingBMBDBN-4EV/

function solution(N, P, Q) {
  if (N < 4) return new Array(P.length).fill(0);

  let M = P.length;
  let semiRanges = new Array(M);
  let semisCount = semis(N);

  for (let k = 0; k < M; k++)
    semiRanges[k] =
      Q[k] < 4
        ? 0
        : semisCount[Q[k]] - semisCount[P[k] - 1];

  return semiRanges;
}

function semis(N) {
  let sieve = siever(N);
  let rsc = new Array(N + 1).fill(0);
  let sc = 0;

  for (let i = 4; i < rsc.length; i++) {
    if (sieve[i] != 0 && sieve[parseInt(i / sieve[i])] == 0)
      sc++;
    rsc[i] = sc;
  }

  return rsc;
}

function siever(N) {
  let sieve = new Array(N + 1).fill(0);

  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (sieve[i] == 0) {
      for (let j = i * i; j <= N; j += i)
        if (sieve[j] == 0) sieve[j] = i;
    }
  }

  return sieve;
}
