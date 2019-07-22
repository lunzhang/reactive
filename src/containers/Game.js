import React, { useState, useRef, useEffect, Fragment } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { 
  GREY_COLOR, DARK_COLOR, REVERSE_TRANSFORM,
  COUNT_DOWN_GAME, WHEN_WHITE_GAME, SAD_FACE_GAME, LOADING_GAME,
  COLOR_TEXT_GAME,
} from '../constants';
import Games from './Games';

const descriptions = {
  COLOR_TEXT_GAME: 'Tap when the color and text match',
  SAD_FACE_GAME: 'Tap when there is a sad face',
  WHEN_WHITE_GAME: 'Tap when white',
  COUNT_DOWN_GAME: 'Tap when number goes to 0',
};

const randomGame = () => {
  const games = [COUNT_DOWN_GAME, WHEN_WHITE_GAME, SAD_FACE_GAME, COLOR_TEXT_GAME];
  const index = Math.floor(Math.random() * games.length);
  return games[index];
};

export default function Game({ navigation }) {
  const [scores, setScores] = useState([0, 0]);
  const [gameType, setGameType] = useState('');
  const [gamesCount, setGamesCount] = useState(1);
  const [winner, setWinner] = useState(false);
  const playGame = () => {
    setTimeout(() => {
      setGameType(randomGame());
    }, 500);
  };
  const gamesElem = useRef(null);
  useEffect(() => {
    playGame();
  }, []);
  const handleUserTouch = (playerNum) => {
    if (gameType && gameType !== LOADING_GAME) {
      const newScores = [...scores];
      if (gamesElem.current.isWin()) {
        newScores[playerNum]++;
      } else {
        newScores[playerNum]--;
      }
      setScores(newScores);
      setGamesCount(gamesCount + 1);
      setGameType(LOADING_GAME);
      playGame();
      if (gamesCount === 10) {
        setWinner(true);
      }
    }
  };
  const restart = () => {
    setScores([0, 0]);
    setGamesCount(1);
    setWinner(false);
    playGame();
  };
  const renderWinnerState = () => (
    <Fragment>
      <View style={{ ...styles.playerWrapper, transform: REVERSE_TRANSFORM }}>
        <Text>{scores[1] < scores[0] ? 'You Win' : 'You Lose'}</Text>
      </View>
      <TouchableWithoutFeedback onPress={restart}>
        <View style={{ ...styles.gameWrapper, justifyContent: 'center', alignItems: 'center' }}>
          <Ionicons name="md-refresh" size={64} color="white" />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.playerWrapper}>
        <Text>{scores[1] > scores[0] ? 'You Win' : 'You Lose'}</Text>
      </View>
    </Fragment>
  );
  const renderGameState = () => (
    <Fragment>
      <TouchableWithoutFeedback onPress={() => handleUserTouch(0)}>
        <View style={{ ...styles.playerWrapper, transform: REVERSE_TRANSFORM }}>
          <Text style={styles.description}>{descriptions[gameType]}</Text>
          <Text style={styles.score}>{scores[0]}</Text>
          <Text style={styles.gamesCount}>{gamesCount} / 10</Text>
        </View>
        </TouchableWithoutFeedback>
        <View style={styles.gameWrapper}>
          <Games gameRef={gamesElem} gameType={gameType} />
        </View>
        <TouchableWithoutFeedback onPress={() => handleUserTouch(1)}>
        <View style={styles.playerWrapper}>
          <Text style={styles.description}>{descriptions[gameType]}</Text>
          <Text style={styles.score}>{scores[1]}</Text>
          <Text style={styles.gamesCount}>{gamesCount} / 10</Text>
        </View>
      </TouchableWithoutFeedback>
    </Fragment>
  );
  return (
    <View style={styles.container}>
      {
        winner ? renderWinnerState() : renderGameState()
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: GREY_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gameWrapper: {
    flexGrow: 3,
    width: '100%',
    backgroundColor: DARK_COLOR,
    flexBasis: 0,
  },
  playerWrapper: {
    position: 'relative',
    flexGrow: 2,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: 0,
  },
  score: {
    fontSize: 25,
  },
  description: {
    position: 'absolute', 
    fontSize: 20,
    top: '5%',
    left: '5%',
  },
  gamesCount: {
    position: 'absolute', 
    fontSize: 18,
    bottom: '5%',
    right: '5%',
  }
});
