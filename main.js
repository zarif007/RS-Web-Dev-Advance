let x = 5;
const y = 10;

let arr = [1, 2, 3, 4, '4343']
console.log(arr[3])

arr.map((value) => {
    console.log(value)
})

let [first, second, third] = arr;

console.log(second)

arr.push('ABC');
console.log(...arr)

const student = {
    name: "Ghost",
    age: 23,
    semester: 12,
}

const { age } = student;
console.log(age)

const updatedStudent = { ...student, home: "Dhaka" }

console.log(updatedStudent)

function sum(x, y) {
    console.log(x, y);
    return x + y;
}

const sum1 = (x, y) => {
    console.log(x, y);
    return x + y;
}

console.log(sum(2, 3))
console.log(sum1(2, 3))

for(let i = 0; i < 5; i++){
    console.log(i)
}

const ihave = 50;

if(ihave >= 40){
    console.log('Yes, I can buy')
} else {
    console.log('Sad, I cant buy')
}

ihave >= 40 ? console.log('Yes, I can buy') : console.log('Sad, I cant buy')