import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DARK_COLOR, LIGHT_COLOR } from '../../constants';

function WhenWhite({ }, ref) {
    const [isWhite, setIsWhite] = useState(false);
    let timeOut;
    const play = () => {
        const time = (Math.random() * 3 + 1) * 1000;
        timeOut = setTimeout(() => { 
            setIsWhite(true);
        }, time);
    };
    useEffect(() => {
        play();
        return () => {
            clearTimeout(timeOut);
        };
    }, []);
    useImperativeHandle(ref, () => ({
        play: play,
        checkReactor: () => isWhite,
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