/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import {Chess} from 'chess.js';
import Board from './components/board/Board';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App() {
  const chess = new Chess();

  const [puzzleColor, setPuzzleColor] = useState('w');
  // const [puzzleFen, setPuzzleFen] = useState(
  //   'r1k4r/p2nb1p1/2b4p/1p1n1p2/2PP4/3Q1NB1/1P3PPP/R5K1 b - - 0 19',
  // );
  const [puzzlePgn, setPuzzlePgn] = useState('1.e4');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const PGNS = ['1.e4', '1.d4', '1.Nf3', '1.c4', '1.g3'];

  const loadRandomOpening = () => {
    let randomPgn = PGNS[Math.floor(Math.random() * PGNS.length)];
    setPuzzlePgn(randomPgn);
  };

  const loadReset = () => {
    setPuzzlePgn('');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity style={{padding: '5%'}}>
        <Board
          style={styles.board}
          size={400}
          color={puzzleColor}
          // fen={puzzleFen}
          pgn={puzzlePgn}
          shouldSelectPiece={() => false}
        />
      </TouchableOpacity>
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: '5%',
        }}>
        <Button
          onPress={() => {
            loadRandomOpening();
          }}
          title="Random"
          color="green"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => {
            loadReset();
          }}
          title="Reset"
          color="blue"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    alignSelf: 'center',
  },
});

export default App;
