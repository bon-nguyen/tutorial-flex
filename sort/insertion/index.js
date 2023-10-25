const listArr = [4, 3, 2, 10, 12, 1, 5, 6];

const insertionSort = (a) => {
  let i, j, last;
  for (i = 1; i < a.length; i++) {
    last = a[i];
    j = i;
    while (j > 0 && a[j - 1] > last) {
      console.log("[i, j, last]", i, j, last, listArr);
      a[j] = a[j - 1];
      j--;
    }
    a[j] = last;
  }
};

insertionSort(listArr);

console.log(listArr);
