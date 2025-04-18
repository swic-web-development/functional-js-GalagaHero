// players array
const players = [
  { name: 'DoomGuy', frags: 25, deaths: 0 },
  { name: 'Slayer', frags: 25, deaths: 1 },
  { name: 'Marine', frags: 12, deaths: 15 },
  { name: 'Noob', frags: 0, deaths: 25 },
]

const playsWithMoreFragsThanDeaths = players.filter((player) => {
    console.log(`We are now looking at this player: ${player.name}`)

    return player.frags > player.deaths
})

console.log(playsWithMoreFragsThanDeaths)

const totalFrags = players.reduce((total, player) => {
    return total + player.frags
}, 0)

console.log(totalFrags)

const firstPlayerWithMoreFragsThanDeaths = players.find((player) => {
    return player.frags > player.deaths
})

console.log(firstPlayerWithMoreFragsThanDeaths)

const hasFrags = players.some((player) => {
    return player.frags
})

console.log(hasFrags)

const allPlayersWithMoreFragsThanDeaths = players.every((player) => {
    return player.frags > player.deaths
})

console.log(allPlayersWithMoreFragsThanDeaths)

const sortedPlayers = players.sort((a, b) => {
    return b.frags - a.frags
})

console.log(sortedPlayers)

console.log("") // adds an empty line between the two

// numbers array
const numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce((accumulator, currentVal) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentVal}`)

    return accumulator + currentVal
}, 0)

console.log(sum)

const firstOddNumber = numbers.find((number) => {
    return number % 2
})

console.log(firstOddNumber)

const hasOddNumber = numbers.some((number) => {
    return number % 2
})

console.log(hasOddNumber)

const allOddNumbers = numbers.every((number) => {
    return number % 2
})

console.log(allOddNumbers)

console.log("") // adds an empty line between the two

// numbers2 array
const numbers2 = [5, 3, 8, 1, 2]

const sortedNumbers = numbers2.sort((a, b) => {
    console.log(`Now comparing a: ${a}, b: ${b}`)

    return a - b
})

console.log(sortedNumbers)