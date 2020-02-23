// //create a request variable and assing a new XMLHttpRequest object to it
// const request = new XMLHttpRequest();

// //Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://rickandmortyapi.com/api/character/', true);
// request.send();
// request.onload = ()=> {
//     // begin accessing JSON data
//     console.log('hi')
//     console.log(this.response)
//     const data = JSON.parse(this.response);

//     data.forEach( character => {
//         console.log(character.name);
//     })
// };

//QUESTION FOR JOEY is it possible that declaring a function with arrow makes the function execute automatically or faster than calling it function()?
var request = new XMLHttpRequest()

request.open('GET', 'https://rickandmortyapi.com/api/character/', true)
request.onload = function() {
  // Begin accessing JSON data here
  var response = JSON.parse(this.response)
    var data = response["results"]

  if (request.status >= 200 && request.status < 400) {
    data.forEach(character => {
      console.log(character.name)
    })
  } else {
    console.log('error')
  }
}

request.send()