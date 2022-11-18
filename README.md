# RS-Web-Dev-Advance

# Class 1 (Basic JS)

## What is Javascript
![Logo](https://res.cloudinary.com/practicaldev/image/fetch/s--iQ-MDsrC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://833250.smushcdn.com/1694534/wp-content/uploads/2021/06/3.jpeg%3Flossy%3D1%26strip%3D1%26webp%3D1)
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
![Logo](https://images.velog.io/images/jangws/post/557a4a2e-b7ba-4b22-bb8c-10615619321c/8vja483k9uy31.jpg)

## Array 

``` js
let arr = [1, 2, 3, 4, '4343']
arr.push('ABC');
arr.pop();
```

### Spread operator 
``` js
console.log(...arr)
```

### Array Destructuring
``` js
let [first, second, third] = arr;
console.log(second)
```

## Object
``` js
const student = {
    name: "Ghost",
    age: 23,
    semester: 12,
}
```

### Spread operator 
```  js
const updatedStudent = { ...student, home: "Dhaka" }
console.log(updatedStudent) 
```

### Object Destructuring
``` js
const { age } = student;
console.log(age)
```

## Template literals (Template strings)

``` js
console.log(`string text line 1
 string text line 2`)

let name = "Ghost"

console.log(`Hi i am ${name}`) 
```

# Class 2 (Basic JS)

## Function

``` js
function sum(x, y) {
    console.log(x, y);
    return x + y;
}
console.log(sum(2, 3))
```

### Big Arrow function

``` js
const sum1 = (x, y) => {
    console.log(x, y);
    return x + y;
}
console.log(sum1(2, 3))
```

## Conditional Statement
``` js
const ihave = 50;

if(ihave >= 40){
    console.log('Yes, I can buy')
} else {
    console.log('Sad, I cant buy')
}
```

### Ternary operator
``` js
ihave >= 40 ? console.log('Yes, I can buy') : console.log('Sad, I cant buy')
```

## Loop 
` For loop `
``` js
for(let i = 0; i < 5; i++){
    console.log(i)
}
```

` Map `
``` js
arr.map((value) => {
    console.log(value)
})
```

## Imports and Exports 
### Named Import Export

` Exporting `
``` js
export const named1 = () => {}

export const named2 = () => {}
```

` Importing `
``` js
import {named1, named2} from './folder1/import2.js';
```

### Default Import Export

` Exporting `
``` js
const default1 = () => {}
export default default1
```

` Importing `
``` js
import default1 from './import1.js';
```


![Logo](https://what.thedailywtf.com/assets/uploads/files/1548873820399-23d6513b-3c4a-409b-bb11-4d98874de60f-image.png)


# Class 3 (ReactJS 01)

``` What is ReactJs 
![Logo](https://gearheart.io/uploads/SPA_1_768x454_d8cac8be1e_6408baa279.png)
```

` What is Component `
![Logo](https://www.techdiagonal.com/wp-content/uploads/2019/08/React-components-blog-image.jpg)
` Class vs function `
` https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/ `

```
From VS code
npx create-react-app my-app
cd my-app
npm start
```

```
From Online IDE
https://codedamn.com/online-compiler/reactjs
```