// String primitive
const message = 'This is my first message  ';
console.log(typeof message)
console.log(message.length)
console.log(message[0])
console.log(message[1])
console.log(message.includes('my'))
console.log(message.includes('not'))
console.log(message.startsWith('This'))
console.log(message.startsWith('this'))
console.log(message.indexOf('my'))
console.log(message.replace('first', 'second')) 
console.log(message) //note that the line above does not modify original string
console.log(message.toUpperCase) 
console.log(message.toLowerCase) 
console.log(message.trim) 
console.log(message.replace('first', 'second\n')) 

console.log('---')

// String objective
const another = new String('hi')
console.log(typeof another)

