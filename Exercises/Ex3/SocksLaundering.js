//$ https://app.codility.com/demo/results/training662974-7DE/

function solution(K, C, D) {
  let total_pairs = 0;
  let one_map = {};
  let d_map = {};
  for (let d of D) {
    d_map[d] = d_map[d] ? d_map[d] + 1 : 1;
  }
  for (let s of C) {
    one_map[s] = one_map[s] ? one_map[s] + 1 : 1;
    if (one_map[s] === 2) {
      total_pairs++;
      delete one_map[s];
    }
  }
  let one_arr = Object.entries(one_map);
  let i = one_arr.length - 1;
  while (K > 0 && i >= 0) {
    if (d_map[one_arr[i][0]] >= 1) {
      total_pairs++;
      d_map[one_arr[i][0]]--;
      K--;
    }
    i--;
  }
  if (K >= 2) {
    K = Math.floor(K / 2);
    let sor_d = Object.entries(d_map).sort(
      ([, a], [, b]) => b - a
    );
    for (let r of sor_d) {
      if (r[1] >= 2) {
        let pairs = Math.floor(r[1] / 2);
        let inc = K <= pairs ? K : pairs;
        K = K <= pairs ? 0 : K - pairs;
        total_pairs += inc;
      }
      if (K < 1) break;
    }
  }
  return total_pairs;
}
