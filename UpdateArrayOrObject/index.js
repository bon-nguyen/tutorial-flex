const arr = [
  {
    id: 1,
    name: "Alice",
  },
  {
    id: 2,
    name: "Bob",
  },
];
/*
    Update an object's using findIndex
*/

/*
    Update an object's using map
*/

// const newArr = arr.map((obj) => {
//   if (obj.id === 2) {
//     return { ...obj, name: "Bon" };
//   }
//   return obj;
// });

/*
    Update an object using for...of
*/

for (const obj of arr) {
  if (obj.id === 1) {
    console.log("Call here", obj);
    obj.name === "bon";
    break;
  }
}

console.log("arr", arr);
