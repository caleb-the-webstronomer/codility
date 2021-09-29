let a = [6, 1, 2, 3, 6, 7, 8, 9, 0];
let x = [];

for (let b in a) {
  let c = +b + 1;
  while (a[c] < 7) {
    c++;
    if (a[c] > 4) {
      break;
    } else {
      x.push(a[c]);
    }
  }
}

console.log(x);
