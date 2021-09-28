//$ https://app.codility.com/demo/results/training5M2FTB-GQ5/

function solution(A) {
  let max_profit = 0,
    min_day = 200000;

  for (let day of A) {
    min_day = Math.min(min_day, day);
    let diff = day - min_day;
    max_profit = Math.max(max_profit, day - min_day);
  }

  return max_profit;
}
