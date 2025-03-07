function calcOrderCost(order) {
    return order.quantity * order.priceEa
}

const calcOrderCost1 = (order) => {
    return order.quantity * order.priceEa
}

const calcOrderCost2 = (order) => order.quantity * order.priceEa

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