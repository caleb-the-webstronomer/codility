//$ https://app.codility.com/demo/results/trainingPGREXT-BQ8/

function solution(A) {
  let uniques = {};
  let non_uniques = {};
  for (let i in A) {
    if (non_uniques[A[i]] === true) {
      delete uniques[A[i]];
    } else {
      uniques[A[i]] = i;
      non_uniques[A[i]] = true;
    }
  }
  let ans = Object.entries(uniques).sort(
    ([, a], [, b]) => a - b
  );
  console.log(ans);
  return ans.length > 0 ? +ans[0][0] : -1;
}
