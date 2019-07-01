import React from 'react';
import { StyleSheet, View } from 'react-native';
import WhenWhite from './WhenWhite';
import Loading from './Loading';

function Games({ gameType, gameRef }) {
    const renderGame = () => {
        switch (gameType) {
            case 'when-white': {
                return <WhenWhite ref={gameRef} />;
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
        flexGrow: 1
    }
});

export default Games;