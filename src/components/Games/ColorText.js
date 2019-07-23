import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DARK_COLOR } from '../../constants';

const colors = ['#2196f3', '#f44336', '#4caf50', '#ffeb3b', '#ff9800'];
const words = ['blue', 'red', 'green', 'yellow', 'orange'];

function ColorText({ }, ref) {
    const [colorIndex, setColorIndex] = useState(-1);
    const [wordIndex, setWordIndex] = useState(-1);
    const play = () => {
        timer = setInterval(() => {
            const randomColor = Math.floor(Math.random() * colors.length);
            const randomWord = Math.floor(Math.random() * words.length);
            const randomCounter = Math.random();
            setColorIndex(randomColor);
            //  Counter so randomColor and randomWord have greater chance of being same
            setWordIndex(randomCounter < 0.3 ? randomColor: randomWord);
        }, 3000);
    };
    useEffect(() => {
        play();
        return () => {
            clearInterval(timer);
        };
    }, []);
    useImperativeHandle(ref, () => ({
        play: play,
        isWin: () => colorIndex === wordIndex,
        restart: () => {
            setColorIndex(-1);
            setWordIndex(-1);
        }
    }));
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={{ ...styles.word, color: colors[colorIndex], transform: REVERSE_TRANSFORM }}>
                    {words[wordIndex]}
                </Text>
            </View>
            <View style={styles.wrapper}>
                <Text style={{ ...styles.word, color: colors[colorIndex] }}>
                    {words[wordIndex]}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: DARK_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    word: {
        fontSize: 32,
    },
});

export default forwardRef(ColorText);