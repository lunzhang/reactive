import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { GREY_COLOR, DARK_COLOR, WHEN_WHITE_GAME, LOADING_GAME, REVERSE_TRANSFORM } from '../constants';
import Games from './Games';

export default function Game({ navigation }) {
  const [scores, setScores] = useState([0, 0]);
  const [gameType, setGameType] = useState('');
  const [gamesCount, setGamesCount] = useState(0);
  const playGame = () => {
    setTimeout(() => {
      setGameType(WHEN_WHITE_GAME);
    }, 500);
  };
  const gamesElem = useRef(null);
  useEffect(() => {
    playGame();
  }, []);
  const handleUserTouch = (playerNum) => {
    if (gameType && gameType !== LOADING_GAME) {
      const newScores = [...scores];
      if (gamesElem.current.checkReactor()) {
        newScores[playerNum]++;
      } else {
        newScores[playerNum]--;
      }
      setScores(newScores);
      setGamesCount(gamesCount + 1);
      setGameType(LOADING_GAME);
      playGame();
    }
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => handleUserTouch(0)}>
        <View style={styles.playerWrapper}>
          <Text style={{ ...styles.score, transform: REVERSE_TRANSFORM }}>{scores[0]}</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.gameWrapper}>
        <Games gameRef={gamesElem} gameType={gameType} />
      </View>
      <TouchableWithoutFeedback onPress={() => handleUserTouch(1)}>
        <View style={styles.playerWrapper}>
          <Text style={styles.score}>{scores[1]}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREY_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gameWrapper: {
    flexGrow: 2,
    width: '100%',
    backgroundColor: DARK_COLOR
  },
  playerWrapper: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    fontSize: 25
  }
});
