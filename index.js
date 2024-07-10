// object exercise: factory and constructor functions

// address = {
//   street: 'Geissfluwheg 27',
//   city: 'Olten',
//   zipCode: 4600,
// }

// factory function
function createAddress(street, city, zipCode) {
  return {
    street: street,
    city: city,
    zipCode: zipCode
  };
}
const address1 = createAddress('Schweizwerweg 13', 'Olten', 4600);
console.log(address1);

// constructor function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
const address2 = new Address('Schweizwerweg 13', 'Olten', 4600);
console.log(address2);