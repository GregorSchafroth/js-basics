// Arrays: finding elements

const numbers = [1, 2, 3, 1, 4]

console.log(numbers.indexOf(3)) // 2 (at location 2, because of zero indexing)
console.log(numbers.indexOf(5)) // -1 (this does not exist)
console.log(numbers.indexOf('3')) // -1 (type matters - there is no 3 string)
console.log(numbers.indexOf(1)) // 0
console.log(numbers.lastIndexOf(1)) // 3

console.log(numbers.indexOf(1) !== -1) // true, this shows that 1 exists in the array
console.log(numbers.includes(1)) // does the same as the line just above

console.log(numbers.indexOf(1, 2)) // 3 (search begins at index 2)

