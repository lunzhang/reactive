import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COUNT_DOWN_GAME, WHEN_WHITE_GAME, LOADING_GAME } from '../../constants';
import CountDown from './CountDown';
import WhenWhite from './WhenWhite';
import Loading from './Loading';

function Games({ gameType, gameRef }) {
    const renderGame = () => {
        switch (gameType) {
            case COUNT_DOWN_GAME: {
                return <CountDown ref={gameRef} />;
            }
            case WHEN_WHITE_GAME: {
                return <WhenWhite ref={gameRef} />;
            }
            case LOADING_GAME: {
                return <Loading ref={gameRef} />;
            }
            default: {
                return <Loading ref={gameRef} />;
            }
        }
    };
    return (
        <View style={styles.container}>
            {renderGame()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexGrow: 1,
    }
});

export default Games;