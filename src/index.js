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

const doubledNumbers2 = numbers2.map(function (number) {
    return number * 2
})

console.log(doubledNumbers2)

// `map` method with arrow function
const numbers3 = [1,2,3,4,5]

const doubledNumbers3 = numbers3.map((number) => number * 2
)

console.log(doubledNumbers3)

// backpack full of ammo and `map` method
const backpackFullOfAmmo = [
    { item: 'bullets', quantity: 10, priceEa: 0.5 },
    { item: 'shotgun shells', quantity: 4, priceEa: 0.5 },
    { item: 'rockets', quantity: 1, priceEa: 5.0 },
    { item: 'energy cell units', quantity: 20, priceEa: 0.2 },
]

function calculateOrderCost(order) {
    return order.quantity * order.priceEa
}

const newAmmo = backpackFullOfAmmo.map((ammo) => {
    console.log(ammo)

    return `<tr>
    <td> Item: ${ammo.item} </td>
    <td> Quantity: ${ammo.quantity} </td>
    <td> Price: ${ammo.priceEa} </td>
    </tr>`
}).join('\n')

console.log(newAmmo)