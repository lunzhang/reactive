import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import Games from './Games';

export default function Game({ navigation }) {
  const [scores, setScores] = useState([0, 0]);
  const [gameType, setGameType] = useState('');
  const gamesElem = useRef(null);
  const handleUserTouch = (playerNum) => {
    if (gameType) {
      const newScores = [...scores];
      if (gamesElem.current.checkReactor()) {
        newScores[playerNum]++;
      } else {
        newScores[playerNum]--;
      }
      setScores(newScores);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => handleUserTouch(0)}>
        <View style={styles.playerWrapper}>
          <Text style={styles.score}>{scores[0]}</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.gameWrapper}>
        <Games ref={gamesElem} gameType={gameType} />
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
    backgroundColor: '#9e9e9e',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gameWrapper: {
    flexGrow: 2,
    width: '100%',
    backgroundColor: '#212121'
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
