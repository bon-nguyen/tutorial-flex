`Writing code on browser console`
Command + Option + I

Javascript can be added to a website page on three different ways
inline script
* Inline script
* Internal script
* External script
* multiple External script


---- Demo Inline script: build-in function
Example:  <button onclick="alert('Welcome to 30DaysOfJavaScript!')">Click Me</button>

---- Demo Internal script: Write in the `head` or the `body` 
Example:<script>
            console.log('Welcome to 30DaysOfJavaScript')
        </script>

---- Demo external script: Import link from html <script src>
<script src="introduction.js"></script>
---- Demo Multiple external 
example: 
<script src="./helloworld.js"></script>
<script src="./introduction.js"></script>

============== Introduction to Data types ==============

- List data types:
+ String
+ Number
+ Boolean
+ Undefined
+ Null
+ Symbol

>> Number 
+ Integers (negative, zero and positive ) numbers Example: -3, -2, -1, 0 , 1 ,2 ,3
+ Float-point Decimal number: -3.5, 4 ,5

>> String
+ Two single quotes 'a'
+ Double quotes "a"
+ backticks `a`

>> Booleans
+ True
+ False

>> Undefined --> If we don't assign a value to a variable -> value undefined , and if function is not return anything, it returns undefined

function(){} -> undefine
let age: -> undefine

>> Null in Javascript means an empty value
let empty = null,


>> Check data types
use `typeof` operator
Example: console.log(typeof 'asabeneh');


>> Comments again
+ Single line commenting //
+ Multiline commenting /**/


>> Variables: are containers of data in a memory location use let, const , var