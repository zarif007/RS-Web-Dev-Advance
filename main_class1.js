// Class 1 Content
// Variables

let x = 5;
var y = 7;
const z = 10;

// Array

let arr = [1, 2, 3, 4, '4343', 99]
arr.push('ABC');
arr.pop();
arr.splice(1, 1)
console.log(arr)

console.log(...arr)

// Object

const student = {
    name: "Ghost",
    age: 23,
    semester: 12,
}

const updatedStudent = { ...student, home: "Dhaka" }
console.log(updatedStudent) 

const { age } = student;
console.log(age)

// Template literals

console.log(`string text line 1
 string text line 2`)

let name = "Ghost"

console.log(`Hi i am ${name}`) 