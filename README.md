# Bisca Portuguese Card Trick Game

This is a web-based multiplayer implementation of the Bisca Portuguese card trick game.

- Real-time gameplay with interactive animations using Framer Motion.
- Dynamic deck of cards rendered from the Deck of Cards API.
- User-friendly interface with intuitive game mechanics.
- Score tracking with in-game card history.

## Table of Contents
- [Demo](#demo)
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Areas of Improvement](#areas-for-improvement)

## Demo

## Overview
Bisca is a Portuguse card game that focuses on winning card-tricks. The game
is popular in many countries, such as Portugal, Spain, Italy, Cape Verde, Angola, etc. The game is similar to its Italian equivalent, Briscola.

The origins of Bisca are unclear, but it is believed to have originated from the Italian equivalent during a period of cultural exchange between the two countries 
in the 16th century.

The game starts with both players being dealt three cards, and one additional card being drawn as the trump card. 

The implementation provided is a complete online equivalent of the game, allowing users to connect online and play against one another. The game features dynamic spring animation courtesy of Framer Motion, and the dynamic card renders courtesy of the Deck of Cards API.

## Installation

### RUNNING LOCALLY

1. Make sure you have the necessary dependencies and packages installed. Run the following command to install the dependencies: npm install. Update npm by running the following command: npm install -g npm
1. In the `CreateGameForm.js` and `Card.js` files, replace all instances of `.PNG` with `.png` (case-sensitive, for some odd reason cloud deployment requires the PNG extension to be in full uppercase).
2. Open the `server.js` file and uncomment the code for local deployment. Comment out all other code outside of the local deployment code.
3. Open the terminal and type the following command to start the code: npm run start.
4. Open your web browser and access the project at `localhost:3000` address.

### RUNNING ON CLOUD (HEROKU, RENDER, ETC.)

1. Make sure you have the necessary dependencies and packages installed. Run the following command to install the dependencies: npm install. Update npm by running the following command: npm install -g npm.
2. Open the terminal and type the following command to create a fresh build for deployment: npm run build.
3. In your cloud platform (Heroku, Render, etc.) replace the default build command with the following: npm install; npm run build.
4. In your cloud platform, replace the default start command with the following: npm run start: server.
5. Once deployed, open your web browser and access the project at the default domain address given by the cloud platform.

## Technologies Used
- Node.js: An open-source JavaScript runtime environment.
- React: A popular JavaScript library for building user interfaces.
- React Bootstrap: A front-end framework that replaces Bootstrap JavaScript
- Framer Motion: A powerful animation library for React.
- Deck of Cards API: An API that provides a deck of cards for use in web applications.

## Acknowledgements
- font-awesome: An icon library toolkit for CSS
- oombi: A well-designed multiplayer game that inspired this project
- freepd: Free-public domain music used for the background. The track used for the project was "Martini Sunset". (The music can be found at: https://freepd.com/misc.php)

## Areas for Improvement
- [X] Animate the waiting page.
- [X] Include a tutorial or help section for new players.
- [X] Develop a mobile-responsive version of the game.
- [X] Implement a promise delay function to replace the timeout function in the server.
- [X] Implement an end animation that moves the card trick towards the winning player.
- [X] Fix a mismatch between the client's perception and the received game state when clicking a card too fast.
- [X] Replace the cloud platform Render with Railway.app to prevent spin down during momemnts of inactivity. 
- [ ] Add sound effects for card draw and card placement
- [ ] Handle disconnects and allow the disconnecting player to return after a set period.
- [ ] Make the opponent's state private in the gamestate.
- [ ] Preload the api images for faster load times.
- [ ] Add a dark-mode feature.
- [ ] Implement a CPU opponent for single-player interaction.
- [ ] Improve the CSS of the end-game info card.
- [ ] Add a three-player, four-player mode (including the team variant of Bisca).
- [ ] Clean up code (in general)
