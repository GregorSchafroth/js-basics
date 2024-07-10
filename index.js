const circle = {
  radius: 1,
  draw() {
    // console.log('draw')
  }
};

// // this approach is a bit old:
// const another = {};
// for (let key in circle)
//   another[key] = circle[key]

// // a more modern way
// const another = Object.assign({}, circle); //this code is the same as the 3 lines above

// yet another way:
const another = { ...circle };

console.log(another)