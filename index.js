const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b'
};

showProperties(movie);

function showProperties(obj){
  for (property in obj){
    console.log(`${property}: ${obj[property]}`)
  }
}