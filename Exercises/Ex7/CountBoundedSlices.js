//$ https://app.codility.com/demo/results/trainingVJHESD-22Q/

let LIMIT = 1000000000;

function solution(K, A) {
  let q = new Q(),
    ans = 0,
    li = 0;

  for (let ri = 0; ri < A.length; ri++) {
    q.enq(A[ri]);
    let max = q.getMax();
    let min = q.getMin();
    while (max - min > K) {
      li++;
      q.deq();
      max = q.getMax();
      min = q.getMin();
    }
    ans = addToLim(ans, ri - li + 1);
    // console.log([q.myq, q.maxs, q.mins, ri, li]);
  }
  return ans;
}

function addToLim(a, b) {
  return Math.min(a + b, LIMIT);
}

class Q {
  constructor() {
    this.myq = [];
    this.maxs = [];
    this.mins = [];
  }

  enq(val) {
    this.myq.push(val);
    while (
      this.maxs.length > 0 &&
      this.maxs[this.maxs.length - 1] < val
    ) {
      this.maxs.pop();
    }
    this.maxs.push(val);
    while (
      this.mins.length > 0 &&
      this.mins[this.mins.length - 1] > val
    ) {
      this.mins.pop();
    }
    this.mins.push(val);
  }

  deq() {
    let head = this.myq.length >= 1 ? this.myq[0] : null;
    this.myq.shift();
    if (head == this.maxs[0]) this.maxs.shift();
    if (head == this.mins[0]) this.mins.shift();
    return head;
  }

  getMax() {
    return this.maxs[0];
  }

  getMin() {
    return this.mins[0];
  }
}
