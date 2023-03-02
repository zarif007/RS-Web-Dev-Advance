// Function
function sum(x, y) {
    console.log(x, y);
    return x + y;
}
console.log(sum(2, 3))

// Big Arrow
const sum1 = (x, y) => {
    console.log(x, y);
    return x + y;
}
console.log(sum1(2, 3))

// Conditional Statement
const ihave = 50;

if(ihave >= 40){
    console.log('Yes, I can buy')
} else {
    console.log('Sad, I cant buy')
}

ihave >= 40 ? console.log('Yes, I can buy') : console.log('Sad, I cant buy')

for(let i = 0; i < 5; i++){
    console.log(i)
}


const arr = [1, 4, 6, 2, 4, 4]
arr.map((value) => {
    console.log(value)
})

const filteredValues = arr.filter(value => value === 4)
console.log(filteredValues)


const findValue = arr.find(value => value === 4)
console.log(findValue)
