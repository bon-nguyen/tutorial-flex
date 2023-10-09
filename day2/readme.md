====== Data types =======
Have two divided:

1. Primitive data types

- Numbers
- Strings
- Booleans
- Null
- Undefined
- Symbol

2. Non-primitive data types

- Array
- Object2
- Func

> > Non-primitive data type is mutable. cannot compared by value.

let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers) // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false

> > Rule of thumb we do not compare non-primitive. Arrays, function, object

Because they are being compared by `reference instead` of value equal if they `refer` same underlying object

let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers) // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo) // true

Math object
`.round()` above .5 up if less 0.5 rounding
`floor` rounding down
`ceil` rounding up
`Math.min` -> return min value in array
`Math.max` -> return max value in array
`Math.random()` -> return number 0 to 0.9999999

> > Escape sequences in strings
> > \n: new line
> > \t: Tab, means 8 spaces
> > \\: Black slash -> This is a backslash symbol (\) > > \': Single quote(')
> > \": Double (")

`Template Literals (Template strings)`
//Syntax
`String literal text`
`String literal text ${expression}`

> > String method

1. length -> method return the number of characters on a string includes empty space\

let js = 'JavaScript'
console.log(js.length) // 10
let firstName = 'Asabeneh'
console.log(firstName.length) //

2. Accessing characters in a string

-> Counting starts from 0 3. toUpperCase() 4. toLowerCase() 5. substr() -> the staring index and number of character to slice
let string = 'javascript'

let string = 'JavaScript'
console.log(string.substr(4,6)) // Script

let country = 'Finland'
console.log(country.substr(3, 4))

6. substring(). It takes two argument, the staring index and the stopping index

let string = 'JavaScript'

console.log(string.substring(0,4)) // Java
console.log(string.substring(4,10)) // Script
console.log(string.substring(4))

7. split() -> The split a string at a specified place

// ref
dùng ref để lưu giá trị,
TH:

> > Checking data types and casting

let age = 250
let job // undefined, because a value was not assigned

> > Change data types (Casting)

- `String to INT`

* parseInt()
* Number()
* Plus sign(+)

- `String to Float`

* parseFloat()
* Number()
* Plus sign(+)

- ``
