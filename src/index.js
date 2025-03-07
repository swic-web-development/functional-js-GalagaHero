function calcOrderCost1(order) {
    return order.quantity * order.priceEa
}

const calcOrderCost2 = (order) => {
    return order.quantity * order.priceEa
}

const calcOrderCost3 = (order) => order.quantity * order.priceEa

function doSomethingWithNumber(number, callbackFunction) {
    return callbackFunction(number)
}

function divideByTwo(num) {
    return num / 2
}

function double(num) {
    return num * 2
}

function triple(num) {
    return num * 3
}

console.log(doSomethingWithNumber(42, double))
console.log(doSomethingWithNumber(42, triple))
console.log(doSomethingWithNumber(42, divideByTwo))

// imperative loop
const numbers = [1, 2, 3, 4, 5]
const doubledNumbers1 = []

for (let i = 0; i < numbers.length; i++) {
    doubledNumbers1.push(numbers[i] * 2)
}

console.log(doubledNumbers1)

// `map` method
const numbers2 = [1,2,3,4,5]

const doubledNumbers2 = numbers.map(function (number) {
    return number * 2
})

console.log(doubledNumbers2)