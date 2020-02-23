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

//access the div element in my html
const app = document.getElementById('root');
//create a container to go within that div
const container = document.createElement('div');
//set the class of the container
container.setAttribute('class','container');
//add the container as a child of the root div
app.appendChild(container);

//make an xml request
var request = new XMLHttpRequest()
//call the rick and morty API
request.open('GET', 'https://rickandmortyapi.com/api/character/', true)
//when the request loads
request.onload = function() {
  // Begin accessing JSON data here
  var response = JSON.parse(this.response)
    var data = response["results"]

  if (request.status >= 200 && request.status < 400) {
    data.forEach(character => {
      //create a contact card with class
      const card = document.createElement('div'); 
      card.setAttribute('class','card');
      root.appendChild(card);

      //create the html character name
      const contact = document.createElement('h2');
      contact.setAttribute('class', 'contact');
      contact.textContent = character.name;
      
      //create the contact image
      const picture = document.createElement('img');
      picture.setAttribute('class','picture');
      picture.src(this.img);
      //print the names and contact info
      card.appendChild(contact);
      
    })
  } else {
    console.log('error')
  }
}
request.send()
