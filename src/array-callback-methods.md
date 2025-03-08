# Array Callback Method - Reduce
```
// variable.reduce((previousVal, currentVal) {}, startingVal)

// sum
const nums = [5, 3, 9]

const numsSum = nums.reduce((sum, currentVal) => {
    return sum + currentVal
}, 0)

console.log(numsSum) // outputs 17

// --------------------------------------------------------------------

// max
const numsMax = nums.reduce((max, currentVal) => {
    if(currentVal > max) return currentVal
    else return max
})

console.log(numsMax) // outputs 9

// --------------------------------------------------------------------

// count
const grades = [ 'A', 'B', 'C', 'B', 'A', 'A', 'C', 'B', 'B', 'C', 'C', 'B', 'A' ]

const gradeCount = grades.reduce((gradesFreq, grade) => {
    if (gradesFreq[grade] == null) {
        gradesFreq[grade] = 1
    } else {
        gradesFreq[grade] += 1
    }
    return gradesFreq
}, {})

console.log(gradeCount) // outputs { A: 4, B: 5, C: 4 }
```