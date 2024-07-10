let speed = 130;
console.log(checkSpeed(speed));

function checkSpeed(speed) {
  const speedLimit = 120;
  const kmPerPoint = 5;
  const points = Math.floor((speed - speedLimit) / kmPerPoint)
  if (points <= 0) return 'ok';
  if (points >= 12) return 'License suspended'
  if (points == 1) return '1 point'
  return `${points} points`
}