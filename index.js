// FizzBuzz
let statement

for (let i = 1; i <= 30; i++){
  statement = '';
  if (i % 3 == 0) statement += 'Fizz';
  if (i % 5 == 0) statement += 'Buzz';
  console.log(i, statement)
}