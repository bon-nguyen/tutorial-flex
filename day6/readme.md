# Loops

>> For Loop
example: 
for(let i = 0;  i <= 5; i++){
    console.log(i) // output 0, 1, 2, 3, 4
}

>> White llop
example:
let i = 0;

let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// 0 1 2 3 4 5


>> Do while loop
let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)

// 0 1 2 3 4 5

>> For of loop
const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}

// 1 2 3 4 5

for (const num of numbers) {
  console.log(num * num)
}

// 1 4 9 16 25

>>Break is used to interrupt a loop

for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
}

// 0 1 2

>> Continue keyword continue to skip a certain iterations
for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}

// 0 1 2 4 5
