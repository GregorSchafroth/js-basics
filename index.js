// Factory Function
function createCircle() {
 return {
  radius,
  draw() {
    console.log('draw');
  }
 } 
}

const circle1 = createCircle(1);

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw')
  }
}

const circle2 = new Circle(1);