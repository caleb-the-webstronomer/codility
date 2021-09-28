//$ https://app.codility.com/demo/results/trainingW6JM2N-DKG/

function solution(P, C) {
  let teams = Math.floor(P / 2);
  return teams > C ? C : teams;
}
