const marks = [40, 60, 95, 70]

function calculateGBrade(marks) {
  let total = 0;
  for (let mark of marks){
    total += mark
  }
  const averageMark = total / marks.length;
  if (averageMark < 60) return 'F'
  if (averageMark < 70) return 'D'
  if (averageMark < 80) return 'C'
  if (averageMark < 90) return 'B'
  return 'A'
}

console.log(calculateGBrade(marks));
