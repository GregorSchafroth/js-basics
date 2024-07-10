const array = [0, null, 1, 2, 3, 4, 'hello', '', 'mas'];

console.log(countTruthy(array));

function countTruthy(array){
  let count = 0;
  for (value of array){
    if (value) count += 1
  }
  return count
}