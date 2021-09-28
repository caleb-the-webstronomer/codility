//* https://app.codility.com/demo/results/trainingD95NE4-4M5/

function solution(S) {
  let words = S.split(" ");
  let ans = -1;
  let sorted_words = words.sort(
    (a, b) => b.length - a.length
  );
  for (let i = 0; i < sorted_words.length; i++) {
    if (isValid(sorted_words[i])) {
      ans = sorted_words[i].length;
      break;
    }
  }
  return ans;
}

function isValid(w) {
  if (!w.match(/^[0-9a-zA-Z]+$/)) {
    return false;
  }
  if (w.replace(/\d/g, "").length % 2 != 0) {
    return false;
  }
  if (w.replace(/\D/g, "").length % 2 == 0) {
    return false;
  }
  return true;
}
