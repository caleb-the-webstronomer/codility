//$ https://app.codility.com/demo/results/trainingYZC2Y9-HRM/

function solution(H) {
  var stack = [];
  var head = -1;
  var block = 0;
  var i = 0;
  while (i < H.length) {
    var h = H[i];
    if (head < 0) {
      ++head;
      stack[head] = h; //stack push
      ++i;
    } else if (stack[head] == h) {
      ++i;
    } else if (stack[head] < h) {
      ++head;
      stack[head] = h; //stack push
      ++i;
    } else {
      //stack[head] > h
      --head; //stack pop
      ++block;
    }
  }
  return block + head + 1;
}
