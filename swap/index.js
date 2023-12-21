/*
    swap two array element with a temporary variable
*/

const myArray = [1, 2, 3, 4, 5];

// const temp = myArray[1];
// myArray[1] = myArray[0];
// myArray[0] = temp;

const test = (arr) => {
  const milestones = Math.floor(arr.length / 2);

  for (let i = 0; i < milestones; i++) {
    const temp = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

const result = test(myArray);

console.log("result", result);
