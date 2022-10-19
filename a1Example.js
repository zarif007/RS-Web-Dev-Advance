// Variable
let variable = 1
const pi = 3.1416

console.log('The Variable and the const is ', variable, pi);

// Array
let arr = [1, 2, 3, 4, '4343']
console.log('The 1st version of the array is',  arr)
arr.push('ABC');
console.log('The Array after pushing a new element',  arr)
arr.pop();
console.log('The Array after poping the last element',  arr)

console.log('The Array after Spreading', ...arr)

let [first, second, third] = arr;
console.log('After Array Destructuring', first, second, third)

// Object 
const student = {
    name: "Ghost",
    age: 23,
    semester: 12,
}

const { name, age } = student;
console.log('After Destructuring the Object', name,  age)

// Template literals
console.log(`Hi i am ${name} and I am ${age} years old`)

