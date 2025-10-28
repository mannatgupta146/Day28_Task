// Introduction to JavaScript

document.title
// 'mannatgupta146 (Mannat Gupta)'

alert("Hello from sheryians")
// undefined

// If HTML is skelton, CSS is clothes then Js is making skelton move and interact

// Js is giving live digital clock on a GitHub page



// Running on browser console

let city = "bhopal";
// 'bhopal'
prompt("your name")
// 'mannat gupta'

alert("hi")
// undefined

2+2
4



// Variables and Keywords in Js

var a = "mannat";
let b = "gupta";
const c = "tanman"

{
    let d = "hello";
}

console.log(d);

// const is useful where we want to make sure that the variable value should not be changed 
// eg: const pi = 3.14, const gravity = 9.8, const birthYear = 2004;


// Logging and Interaction
console.log("mannat");
console.info("20");
console.warn("udhampur");

var name = prompt("enter name");
alert("hello " + name)

typeof(name)
// string

let age = prompt("enter age");
// 20

console.log(age + 5);
// 205



// Working with strings

let msg = "I love sheryians";
msg.slice(2,6);
msg.split(" ")
msg.replace("love", "study at")

let user = "Mannat"
console.log(`Hello ${user}, welcome to sheryians!`)

msg.includes("love");




// Statements and Semicolons

let message = "I love sheryians"; let me = "Mannat";

console.log(message); console.log(`Hello ${me}, welcome!`);

// I love sheryians
// Hello Mannat, welcome!
// undefined

console.log("1")
console.log("2")
console.log("3")


// Comments

// Mannat Gupta

// in this i learned datatypes in javascript 
// as taught by harsh bhaiya 
// in the class

// console.log("1")




// Expressions vs Statements

 5+10 // expression gives result immediately

 x=10; // statement

 let y = (5+10)*2;
 console.log(y)
 // 30

 // expression produces a value and statement performs an action




 // DataTypes in JavaScript

 console.log(1/0);
 // infinity
 
 console.log(0/0)
 // NaN
    
 console.log(Number("abc"))
 // NaN
 
 console.log(undefined + 1)
  // NaN


  // null is what we assign to a variable to indicate that it has no value while 
  // undefined means a variable has been declared but not assigned any value yet




  // Primitives vs References
  
  let x = 5;
  let z = x;
  z=10;
  console.log(x,z)
  // 5 10


  let obj1= {name: "mannat"};
  let obj2 = obj1;
  obj2.name = "gupta";
  console.log(obj1.name, obj2.name)
  // gupta gupta