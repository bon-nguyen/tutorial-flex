> > Set
> > What?

- Set is a collection of element.
- Let can only contains unique element

Create

# Create empty

const companies = new Set()

# Create from array

const languages = [
"English",
"Finnish",
"English",
"French",
"Spanish",
"English",
"French",
];

const setOfLanguages = new Set(languages);

# Add

languages.add('Vietnam')

# Delete

languages.delete('Vietnam')

# Check

languages.has('Vietnam')

# Clear

languages.clear()

# Union of sets

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(A);
console.log(B);
console.log(C);

# Intersection of sets

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num))

# Difference of sets

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => !B.has(num))
let C = new Set(c)

> > Map

# Empty map

const map = new Map()
console.log(map)
