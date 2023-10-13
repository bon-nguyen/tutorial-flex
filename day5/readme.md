# Arrays What?

- An array can store multiple values, Each value in an array has an index, and ech index has a reference in a memory address.
- Index array start from zero

# How to create an empty array

- Using array constructor
  const arr = Array()
- Using square brackets([])

//syntax (1)
const arr = Array()
console.log(arr);

// syntax (2)
const arr = [];

# Creating an array using split

> > How to create an array with values

- Array can have items of different data types

const arr = ['Bon', 250, {age: 34}]

> > Creating an array using split
> > let js = "javascript";
> > js.split('')
> > js.split(',')
> > js.split(' ');

> > Accessing array items using index
> > ['banana', 'orange']

    0         1      index

> > Modifying array element
> > const numbers = [1, 2, 3, 4, 5]
> > numbers[0] = 10 // output [10, 2, 3, 4, 5]

> > Methods to manipulate array

- Array
- Length
- Concat
- indexOf
- Slice ....

`Array constructor`
const eightEmpty = Array(8);
console.log(eightEmpty)
(8) [empty × 8]

`Creating static values with fill`
const eightXvalues = Array(8).fill('X')
const eight0values = Array(8).fill(0)

`Concatenating array using concat`

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

`Getting array length`
console.log(numbers.length)

`Getting index`
console.log(numbers.indexOf(6))

- Error: -1

`Check an element if it exits in an array`

- Check items in list
  const fruits = ['banana', 'orange', 'mango', 'lemon']
  let index = fruits.indexOf('banana') (-1: false, 1 true)

.lastIndexOf
.includes

`Last index of an element in array`
const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) // 7
console.log(numbers.lastIndexOf(0)) // -1

`Includes check items have in a array return true false`
`Checking array`
const numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers))

`Converting array to string`

const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString())

`Joining array elements`

const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

`Splice`

`pop`

`push`

`remove pop`

`unshift`

`sort`

`reverse`

> > Array of arrays
