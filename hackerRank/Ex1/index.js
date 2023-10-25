// const data = [1, 2, 3, 4, 5];

// function rotateLeft(d, arr) {
//   // Write your code here
//   const cloneArr = [...arr];
//   for (let i = 0; i < arr.length; i++) {
//     console.log("Run", i, d);
//     --d;
//     if (d === 0) {
//       break;
//     }
//   }
// }

// const result = rotateLeft(4, data);

let myArray = [12, -2, 55, 68, 80];
const temp = myArray[1];
myArray[1] = myArray[0];
myArray[0] = temp;

console.log("myArray", myArray);
