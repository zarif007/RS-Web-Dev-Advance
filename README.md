# RS-Web-Dev-Advance

# Class 1 (Basic JS)

## What is Javascript

JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented, scripting language, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. JavaScript can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data.


## Variable 

### Types

` int, double, string, boolean, array, object `

` 4 Ways to Declare a JavaScript Variable:
1. var
2. let
3. const
4. nothing `

```
Examples
let x = 5;
var y = 7;
const z = 10;
```

## Array 

```
let arr = [1, 2, 3, 4, '4343']
arr.push('ABC');
arr.pop();
```

### Spread operator 
```
console.log(...arr)
```

### Array Destructuring
```
let [first, second, third] = arr;
console.log(second)
```

## Object
```
const student = {
    name: "Ghost",
    age: 23,
    semester: 12,
}
```

### Spread operator 
``` 
const updatedStudent = { ...student, home: "Dhaka" }
console.log(updatedStudent) 
```

### Object Destructuring
```
const { age } = student;
console.log(age)
```

## Template literals (Template strings)

console.log(`string text line 1
 string text line 2`)

let name = "Ghost"

console.log(`Hi i am ${name}`)

## Function

```
function sum(x, y) {
    console.log(x, y);
    return x + y;
}
console.log(sum(2, 3))
```

### Big Arrow function

```
const sum1 = (x, y) => {
    console.log(x, y);
    return x + y;
}
console.log(sum1(2, 3))
```

## Conditional Statement
```
const ihave = 50;

if(ihave >= 40){
    console.log('Yes, I can buy')
} else {
    console.log('Sad, I cant buy')
}
```

### Ternary operator
```
ihave >= 40 ? console.log('Yes, I can buy') : console.log('Sad, I cant buy')
```

## Loop 
` For loop `
```
for(let i = 0; i < 5; i++){
    console.log(i)
}
```

` Map `
```
arr.map((value) => {
    console.log(value)
})
```
