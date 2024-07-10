// object exercise: address

address = {
  street: 'Geissfluwheg 27',
  city: 'Olten',
  zipCode: 4600,
}

for (let key in address) {
  console.log(`${key}: ${address[key]}`);
}
