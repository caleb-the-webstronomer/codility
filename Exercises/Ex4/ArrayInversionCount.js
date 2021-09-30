//$ https://app.codility.com/demo/results/trainingEKWDM3-TF7/

function solution(A) {
  return mergeSortAndCount(A, 0, A.length - 1);
}

function mergeAndCount(arr, l, m, r) {
  let left = [];
  for (let i = l; i < m + 1; i++) {
    left.push(arr[i]);
  }

  let right = [];
  for (let i = m + 1; i < r + 1; i++) {
    right.push(arr[i]);
  }
  let i = 0,
    j = 0,
    k = l,
    swaps = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
      swaps += m + 1 - (l + i);
      if (swaps > 1000000000) {
        swaps = -1;
        break;
      }
    }
  }
  while (i < left.length) {
    arr[k++] = left[i++];
  }
  while (j < right.length) {
    arr[k++] = right[j++];
  }
  return swaps;
}

function mergeSortAndCount(arr, l, r) {
  let count = 0;
  if (l < r) {
    let m = Math.floor((l + r) / 2);

    let c1 = mergeSortAndCount(arr, l, m);
    let c2, c3;
    if (c1 === -1) {
      return -1;
    } else {
      c2 = mergeSortAndCount(arr, m + 1, r);
      if (c2 === -1 || c1 + c2 > 1000000000) {
        return -1;
      } else {
        c3 = mergeAndCount(arr, l, m, r);
        if (c3 === -1 || c1 + c2 + c3 > 1000000000)
          return -1;
      }
    }
    count = c1 + c2 + c3;
  }
  return count;
}
