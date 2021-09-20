let theNum = 100
let count = []

for (let i = 1; i < theNum+1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        count.push("FizzBuzz");
    } else if (i % 3 === 0) {
        count.push("Fizz")
    } else if (i % 5 === 0) {
        count.push("Buzz")
    } else {
        count.push(i)
    }
}

console.log(count)