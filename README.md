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
// Remove last element
arr.pop();
// Remove any element by index
arr.splice(index, 1)
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
` Filter `
``` js
const filteredValues = arr.filter(value => value === 4)
console.log(filteredValues)
```

` Find `
``` js
const findValue = arr.find(value => value === 41)
console.log(findValue)
```

## Imports and Exports 
### Named Import Export

` Exporting `
``` js
export const sum = (a, b) => a + b;

export const sub = (a, b) => a - b;
```

` Importing `
``` js
import { sum, sub } from './folder/main.js'
```

### Default Import Export

` Exporting `
``` js
const mult = (a, b) => a * b;
export default mult
```

` Importing `
``` js
import mult from './folder/main.js'

console.log(mult(6, 7))
```


![Logo](https://what.thedailywtf.com/assets/uploads/files/1548873820399-23d6513b-3c4a-409b-bb11-4d98874de60f-image.png)


# Class 3 (ReactJS 01)

## What is ReactJs?
![Logo](https://gearheart.io/uploads/SPA_1_768x454_d8cac8be1e_6408baa279.png)
## What is React Component?
![Logo](https://miro.medium.com/max/1400/1*U25ZZmTZ3vgfT7i45suzrw.png)
## Class vs function?
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

### Component Break down
![Logo](https://i.ibb.co/Bc3Ky2W/Ca33pture.png)

### Props 
``` Js
const Hello = (props) => {

  const value = 5;
  const getTheValue = () => {}

  return (
    <div>
      <h2>Hi </h2>
      <h1>{props.name}</h1>
      <h3>{value}</h3>
    </div>
  )
}

<Hello name={"Zarif"} />
<Hello name={"CR7"} />
```

#### Event 
```Js
<button onClick={() => alert(hi)} />
```

# Class 4 & 5 (ReactJS 02)

### Hooks 
```
React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. 
```

#### useState Hook

```Js
import { useState } from 'react'

const [ number, setNumber ] = useState(0);

the first part (number) is the actual value
the second part (setNumber) is used to assign value to the number
useState(0), here is 0 is the initial value

Updating the Number

number = number + 100 ❌
setNumber(number + 100) ✔️ 
```

#### useEffect Hook

```Js
useEffect(() => {
    alert(value);
}, [value])

() => {
    The logics
}

[] holds the dependencies
```

<!-- 
# Class 5 (Project 01)

```
npx create-react-app movie-app
cd movie-app
npm start
```

![Logo](https://www.seobility.net/en/wiki/images/f/f1/Rest-API.png)

```
omDB Api key
https://www.omdbapi.com/apikey.aspx
```

```
My api key: 4a98c271
```

```
Endpoints:
http://www.omdbapi.com?apikey=4a98c271/s=movie_title
```

```JS
Fetching the movies data
const movies = await (await fetch(`${API_URL}&s="${title}"`)).json()
``` -->


# Class 6 (Project 01)

```
npx create-react-app game-app
cd game-app
npm start
```

```
RAWG game Api key
https://rawg.io/apidocs
```

```
My api key: 29b8564f44d7476c88ad2aedb1eaac91
```

```
Endpoints:
https://api.rawg.io/api/games?search=gameName&key=29b8564f44d7476c88ad2aedb1eaac91
```
```JS
Fetching the games data
const games = await (await fetch(`https://api.rawg.io/api/games?search=${gameName}&key=29b8564f44d7476c88ad2aedb1eaac91`)).json()
```



# Roadmap / what's next 🛣️ 

![Logo](roadmap.PNG)

## Immediate Next step (Take either) 👇
```
1. Learn Python > Learn Django > Develop few fullstack WebApps with Django, HTML, CSS 
    or Django REST Framework and ReactJS (even better)
```
```
2. Practice JavaScript(ES6) > Practice ReactJs > Develop few frontend WebApps with ReactJS
```

` Take 4 - 6 months to follow a step. Follow YouTube videos to develop first few projects  `

## Pro tips 💡
```
1. Explore stuffs but Learn one thing at a time. 
2. No need to master anything at this moment. 
3. Learn by doing projects.
4. Develop as much projects as you can.
5. No need to optimize anything at the first try. 
```` 