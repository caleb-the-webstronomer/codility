//$ https://app.codility.com/demo/results/trainingWSRYUP-4JZ/

function solution(A) {
  let count = {};
  A.map((a) => {
    count[a] = count[a] > 0 ? count[a] + 1 : 1;
  });

  let divs = {};

  Object.keys(count).map((key) => {
    let sum = 0;
    let j = 1;
    while (j * j <= key) {
      if (key % j == 0) {
        if (count[j] > 0) {
          sum += count[j];
        }
        let k = key / j;
        if (k != j) {
          if (count[k] > 0) {
            sum += count[k];
          }
        }
      }
      j++;
    }
    divs[key] = A.length - sum;
  });
  let answer = [];
  A.map((a) => {
    answer.push(divs[a]);
  });

  return answer;
}
