//$ https://app.codility.com/demo/results/training6XK28R-NGJ/

function solution(A, B) {
  let temp_a = 0;
  let temp_b = 0;
  let ans = "";
  while (A != 0 || B != 0) {
    if (A > B) {
      if (temp_a < 2) {
        ans += "a";
        temp_b = 0;
        temp_a++;
        A--;
      } else {
        ans += "b";
        temp_a = 0;
        temp_b++;
        B--;
        temp_a = 0;
      }
    } else if (A <= B) {
      if (temp_b < 2) {
        ans += "b";
        temp_a = 0;
        temp_b++;
        B--;
      } else {
        ans += "a";
        temp_b = 0;
        temp_a++;
        A--;
        temp_b = 0;
      }
    }
  }
  return ans;
}
