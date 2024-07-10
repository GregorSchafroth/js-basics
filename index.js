
showNumbers(15);

function showNumbers(limit) {
  for (i = 1; i <= limit; i++){
    console.log(`${i} ${i % 2 == 0 ? 'EVEN' : 'ODD'}`)
  } 
}