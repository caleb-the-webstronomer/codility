//$ https://app.codility.com/demo/results/trainingH83EXS-D5F/

function solution(A) {
  let deepest = 0;
  let curr_high = 0;
  let curr_low = 0;

  for (let h of A) {
    let depth;
    if (h > curr_high) {
      depth = curr_high - curr_low;
      curr_high = h;
      curr_low = h;
    } else if (h < curr_low) {
      curr_low = h;
    } else {
      depth = h - curr_low;
    }
    if (depth > deepest) deepest = depth;
  }
  return deepest;
}
