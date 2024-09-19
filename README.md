
# AvegenApp

## App Requirements
- **8 x 8 grid** in the screen center
- **Labels** on the vertical and horizontal axis
- **Overlay the chess pieces** as shown in the image
    - Download chess pieces from [here](https://opengameart.org/sites/default/files/chess.zip)
- **2 buttons** below the grid:
    1. **Random**: Chooses a random opening move and updates the board.
    2. **Reset**: Puts pieces back in their original state.

## Solution
1. Single screen application with a chess board and two buttons: 'Random' and 'Reset'.
2. Studied [Chess.js](https://www.npmjs.com/package/chess.js) to learn about rendering a chess board (following DRY principle).
3. Installed Chess.js from [NPM](https://www.npmjs.com/package/chess.js).
4. Worked with **SEN**, **PGN**, and built-in methods provided by Chess.js to manipulate the chess board.
5. Used the following chess openings: `['1.e4', '1.d4', '1.Nf3', '1.c4', '1.g3']`.
6. Used `Chess.DEFAULT_POSITION` SEN string to reset the chess board.

## Tech Stack
1. React
2. React Native
3. JavaScript/ES6
4. CSS
5. Chess.js

## Application Video
[AvegenApp.webm](https://user-images.githubusercontent.com/46965764/228624904-80b63bd0-f8a6-492f-9b27-d2cad62e5777.webm)

## Setup and Installation

### Clone the repository
You will need `node` and `npm` installed globally on your machine.

### 1. Installation
In the project root folder, run:

```bash
npm install
```

### 2. Prerequisites to Run
- Connect a physical Android/iOS device in USB debugging mode, **OR** launch an emulator using AVD Manager (Android Studio).
- If needed, reset or clear the React Native packager’s cache:

```bash
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

### 3. To Start the Android Application
- **For Android users**: Connect your Android phone in USB Debugging Mode, then run:

```bash
npx react-native start
```
Press `a` or `i` for respective OS.

- **For iOS users**: Run:

```bash
npx react-native run-ios
```

### 4. To Visit the App
The app will launch on your Android/iOS device.

## Run Tests

- **Unit tests**:  
  Run:

```bash
npm run mocha
```

- **Unit tests with coverage**:  
  Run:

```bash
npm run coverage
```

- **Linter**:  
  Run:

```bash
npm run lint
```
