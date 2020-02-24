<!-- Every README should start with an H1 -->
# Week 3 Front End Basics
<!-- A one sentence description of the project or assignment -->
This is my third week's homework assignment for Dynamic Web Dev. 


<!-- It is good practice to add an about or summary -->
## About

For this assignment, we were asked to connect to an API and use the results to control the DOM. I chose to connect to the Rick and Morty API to make a game for guessing whether characters were alove or dead.

<!-- It is essential to describe how to set up your project -->
## Setup

This project requires very little setup - just open it in any web browser!

<!-- Any knowledge or tools you will need before hand -->
### Prerequisites

1. A text editor - preferably [VS Code](https://code.visualstudio.com/)
2. An understanding of markdown syntax. You can learn about markdown at this [Markdown Guide](https://www.markdownguide.org/getting-started/)


<!-- any installation needs should be defined -->
### Installation

For this particular project, there are no specific installation requirements.

<!-- Write instructions on how to start working on your project -->
### Develop

To develop this document, you can follow the steps provided below:
1. create a fork of this project on Github
2. ping the author of this repo via Github Issues to see if they are looking for contributions on the specific feature you're looking to add
3. open the file in VS Code and make updates 
4. add and commit those changes in your forked github repo
5. make a pull request specifying what additions and changes were made
6. have a nice chat and communication with me about those changes. 
7. celebrate the contribution! 

<!-- Notes about the deployment -->
### Deployment

This project is hosted on Github. Github renders markdown files.

## Built with

* [VS Code](https://code.visualstudio.com/)
* [Github](https://github.com)
* [Glitch](https://glitch.com)
* [Rick and Morty API](https://rickandmortyapi.com)

## Authors

* [Lillian Ritchie](https://github.com/lillianritchie)

## Code of Conduct

Please read the [CODE OF CONDUCT](https://www.mozilla.org/en-US/about/governance/policies/participation/) 

## License

This is README template is licensed according to [Attribution 4.0 International (CC BY 4.0) ](https://creativecommons.org/licenses/by/4.0/)

<!-- thank and reference all the things that made your project happen -->
## Acknowledgements

* Axel Fuhrmann (Creator of the Rick and Morty API)
* Justin Roiland, Dan Harmon, and others (Creators of Rick and Morty)


<!-- For your assignments you might consider  -->
# Notes & Process
* I made all of the element sizes in this site relative to the window width to maximize its ability to stay within the general grid plan.
* Since the event detail text can get very small, I added a hover feature that enlarges event text when you hover over the event (the text doesn't enlarge TOO much, because larger sizes broke the grid and/or spilled outside of the window)

<!-- How you built this project - Include images, gifs, and notes here -->
## Process & Documentation
* I spent most of this week working on the workbook for using javascript to affect the dom.

* Then, I started to map out how I wanted to use the character information in this API using figma
![logo](idea_1.jpg)
![logo](idea_2.jpg)

* I didn't set an official "styleguide" here, but I chose courier and a grayscale palate. The idea was I wanted to allude to the sort of cartoony computer look without hunting down a digital lettering font, and to to highlight the green or red results when you click a character to find out their status (alive or dead)

*  Though I planned out my character cards in figma, I ultimately really strayed from my initial design, as I found it really useful to play with different css parameters and just explore what they do.

* While I struggled to figure out how to make the interactive function on my site work, I logged the answers in the console.

<!-- Any specific challenges or struggles documented -->
## Challenges & Struggles
* I struggled with EVERYTHING here! 
* I struggled with asynchronous connection to the API and after hours of debugging, I found that if I declared a function like "function()" it worked, but if I declared it as an arrow, the forEach loop would run before the response was gotten from the API.
* I struggled a lot with scope here - I would accidentally name a variable something that matched a parameter in the API, and break my code that way.

* I struggled with filtering the API data- how can I choose a random selection of characters?

* I struggled with text alignment and font - how can I bold just part of a line of text?

* I wanted to make the card turn black when clicked before changing background colors, but I couldn't figure it out.

<!-- Any questions you have -->
## Questions
* Is there a difference between the older way of declaring a function and declaring it as an arrow function, and could that be affecting the speed at which the function is called?
* How can I make just part of a line of text bold, if not using "<b></b>" in html?
* is there a CSS selector for when an element is clicked? (like :hover)?

<!-- References for resources and inspiration -->
## References
