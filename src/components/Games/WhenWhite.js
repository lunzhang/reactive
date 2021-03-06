import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DARK_COLOR, LIGHT_COLOR } from '../../constants';

function WhenWhite({ }, ref) {
    const [isWhite, setIsWhite] = useState(false);
    let timer;
    const play = () => {
        const time = (Math.random() * 3000) + 100;
        timer = setTimeout(() => { 
            setIsWhite(true);
        }, time);
    };
    useEffect(() => {
        play();
        return () => {
            clearTimeout(timer);
        };
    }, []);
    useImperativeHandle(ref, () => ({
        play: play,
        isWin: () => isWhite,
        restart: () => {
            setIsWhite(false);
        }
    }));
    return (
        <View style={{ ...styles.container, backgroundColor: isWhite && LIGHT_COLOR }}>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: DARK_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default forwardRef(WhenWhite);