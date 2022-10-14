let x = 5;
const y = 10;

let arr = [1, 2, 3, 4, '4343']

arr.push('ABC');
console.log(...arr)

const student = {
    name: "Ghost",
    age: 23,
    semester: 12,
}

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