//$ https://app.codility.com/demo/results/training78RZ36-63K/

function solution(E, L) {
  let in_mins =
    +E.substring(0, 2) * 60 + +E.substring(3, 5);
  let out_mins =
    +L.substring(0, 2) * 60 + +L.substring(3, 5);
  let total_mins = out_mins - in_mins;
  let total_hours = Math.ceil(total_mins / 60);
  let extra_fare =
    total_hours > 1 ? 4 * (total_hours - 1) : 0;
  return 2 + 3 + extra_fare;
}
