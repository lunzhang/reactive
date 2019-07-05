import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DARK_COLOR, LIGHT_COLOR } from '../../constants';

let hideTime;

function CountDown({ }, ref) {
    const [time, setTime] = useState(10);
    const [hide, setHide] = useState(false);
    let timer;
    const play = () => {
        timer = setTimeout(() => {
            if (time > 0) {
                setTime(time => time - 1);
            }
            if (time === hideTime) {
                setHide(true);
            }
        }, 1000);
    };
    useEffect(() => {
        hideTime = Math.floor(Math.random() * 5) + 3;
    }, []);
    useEffect(() => {
        play();
        return () => {
            clearTimeout(timer);
        };
    }, [time]);
    useImperativeHandle(ref, () => ({
        play: play,
        isWin: () => time === 0,
        restart: () => {
            setTime(0);
            setHide(false);
        }
    }));
    return (
        <View style={styles.container}>
            <Text style={{ color: LIGHT_COLOR }}>
                {hide ? '?' : time}
            </Text>
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

export default forwardRef(CountDown);