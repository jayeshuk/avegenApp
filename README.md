# AvegenApp

App Requirements:
- 8 x 8 grid in the screen center
- Labels on vertical and horizontal axis.
- Overlay the chess pieces as shown in the image.
    1. Download chess pieces from here (https://opengameart.org/sites/default/files/chess.zip)
- 2 buttons below the grid
    1. Random -> Chooses one random from common opening moves and updates the board.
    2. Reset -> puts back pieces to their original state.


Solution:
1. Single Screen Application with Chess Board and two buttons 'Random' and 'Reset'.
2. Studied <a href="https://www.npmjs.com/package/chess.js">Chess.js</a> to learn about rendering a chess board  (to follow DRY).
4. Installed Chess.js from <a href="https://www.npmjs.com/package/chess.js">Chess.js - NPM</a>.
5. Worked on SEN, PGN and in-built methods provided by Chess.js to manipulate the chess board.
6. Used `['1.e4', '1.d4', '1.Nf3', '1.c4', '1.g3']` openings.
7. Used `Chess.DEFAULT_POSITION` SEN string to reset the chess board.

Tech Stack:
  1. React
  2. React Native
  3. JavaScript/ES6
  4. CSS
  5. Chess.js
  
## Application Video
[AvegenApp.webm](https://user-images.githubusercontent.com/46965764/228624904-80b63bd0-f8a6-492f-9b27-d2cad62e5777.webm)

## Setup and Installation

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

1. Installation (In project root folder):

    `npm install`    

2. Prerequisites to Run:
    
     - Connect Physical Android/iOS device in USB debugging mode  OR  Launch Emulator using AVD Manager [Android Studio].
     - Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

          ```
          npm start -- --reset-cache
          # or
          yarn start -- --reset-cache
          ```

3. To Start Android Application:

    * For Android users (Connect your Android Phone in USB Debugging Mode):
      `npx react-native start` and then press a or i for respective OS

    * For iOS users:
      `npx react-native run-ios`

4. To Visit App: 
    
    App Launched in your Android/iOS Device
    
## Run tests
Unit tests: `npm run mocha`

Unit tests with coverage: `npm run coverage`

Linter: `npm run lint`
