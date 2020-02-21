const baseURL = "https://sv443.net/jokeapi/v2";
const categories = ["Programming", "Miscellaneous"];
const params = [
    "blacklistFlags=religious,racist,sexist", "twopart"
];

var xhr = new XMLHttpRequest();
xhr.open("GET", baseURL + "/joke/" + categories.join(",") + "?" + params.join("&"));

xhr.onreadystatechange (()=> {
    if(xhr.readyState == 4 && xhr.status < 300) // readyState 4 means request has finished + we only want to parse the joke if the request was successful (status code lower than 300)
    {
        var randomJoke = JSON.parse(xhr.responseText);
           
        alert(randomJoke.setup);
        alert(randomJoke.delivery);
    }
    else if(xhr.readyState == 4)
    {
        alert("Error while requesting joke.\n\nStatus code: " + xhr.status + "\nServer response: " + xhr.responseText);
    }
});

xhr.send();