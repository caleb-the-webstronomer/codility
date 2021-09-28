//$ https://app.codility.com/demo/results/trainingABG48C-QUR/

function solution(S) {
  var len = S.length;

  if (!len) return 1;

  var stack = [],
    matches = {
      "{": "}",
      "(": ")",
      "[": "]",
    };

  for (i = 0; i < len; i++) {
    var currentChar = S[i];
    if (matches[currentChar]) stack.push(currentChar);
    else {
      if (!stack.length) return 0;
      var previousChar = stack.pop();
      if (matches[previousChar] !== currentChar) return 0;
    }
  }
  return stack.length ? 0 : 1;
}
