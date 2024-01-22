======================= CSS (Cascading Style Sheets) ===========================
-> Các loai css

- External
  EX: <link rel="stylesheet" href="mystyle.css">
- Internal
EX:
<style>
 body {
 background-color: linen;
 }
 </style>
- Inline
  EX: <h1 style="color:blue;text-align:center;">This is a heading</h1>

-> Các cách cắn giữa trong css

- text-center
- width: margin-auto
- Grid: display-grid. place-items: center;
- Flex: display: flex item-center, justify-content: center
  => Box modal
  Nói về design and layout.
  Nó wraps around every HTML element như , content, padding, border, margin

======================= JS ==========================
-> Browser sử lý JS như thế nào
B1: Tải HTML và CSS
B2: Phần tích xây dựng DOM
B3: Nếu có mã JS trình duyệt tải máy chủ và thực thi nó
B4: Tạo ra web và thực thi JS

-> Hoisting trong JS

- Là khải niệm đưa khai báo lên đầu phạm vi

- Là cơ thế đưa variables và function declarations đưa lên cũng một scope hiện tại

-> CallBack function
Là một function, được truyền đưới dạng argument tới một function khác.
Cho phép một function gọi tới một function khác

Function sequence
Sequence Control

======================= React==========================
// State
Là một đối tượng để nghi nhớ, lưu trữ thông tin về các component.

// Props
Viết tắc của Properties. Nó là một Object tích hợp trong React để lưu trữ ác thuộc tính của, Props  
cho phép giao tiếp giữa các component bằng cách truyền tham số giữa các components.

// UseState
Là một hook giúp sử dụng state trong function component.
Input: any
Output: [state, setState]

//

========================== OPP =========================
(Object Oriented Programming) trong Javascript là một cách lập trình dựa trên class và object

What are Classes and Objects in Javascript?

What is a Class ?
You can think ò a class a blueprint( Bản thiết kế ) of a house .
We can create from a Object. Is is like an template for an Object

https://www.freecodecamp.org/news/object-oriented-programming-javascript/

Tính đóng gói (Encapsulation)
Tính Trừu tượng (Abstraction)
Tính kế thừa (Inheritance)
Tính đa hình (Polymorphism)

Vì Javascript trông có Class như (Java, Python, C#). Tuy nhiêu có thể làm điều đó với function

function Person (name, age) {
this.name = name
this.age = age
this.hello = function hello(){
console.log("HELLO", this.name);
}
}
