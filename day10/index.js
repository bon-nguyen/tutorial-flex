// const languages = [
//   "English",
//   "Finnish",
//   "English",
//   "French",
//   "Spanish",
//   "English",
//   "French",
// ];

// const setOfLanguages = new Set(languages);
// console.log("setOfLanguages", setOfLanguages);

// for (const language of setOfLanguages) {
//   console.log(language);
// }

// const array1 = ["a", "b", "c"];

// for (const element of array1) {
//   console.log(element);
// }

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
// let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
// let C = new Set(c);

// console.log(A);
// console.log(B);
// console.log(C);

const countries = ["Finland", "Helsinki"];
const map = new Map(countries);
console.log(map);
console.log(map.size);
