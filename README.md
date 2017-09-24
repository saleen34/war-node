
Implement a server that plays the card game
[War for 2 players](https://www.pagat.com/war/war.html#two). The server should
have the following three endpoints:

- `PUT /game` -> `{"id": <string>}`

  Starts a new game of war and returns the game's id.

- `GET /game/:id` -> `{"playerOne": <number>, "playerTwo": <number>}`

  Gets the status of the identified game, returning the number of cards each
  player has in their deck.

- `POST /game/:id/play` -> `{"winner": <string>, "playerOne": {"deck": <number>, "cards": <array>}, "playerTwo": ...}`

  Runs one battle, including resolving any ties. The response should identify
  the winner, and show the cards each player played as well as their new deck
  sizes.

For your convenience, a simple test script is provided that will run a game to
completion and tell you if it is okay.


Running/Testing

- After cloning
- npm install
- npm start
- npm test
