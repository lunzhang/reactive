import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DARK_COLOR, LIGHT_COLOR } from '../../constants';

function WhenWhite({ }, ref) {
    const [isWhite, setIsWhite] = useState(false);
    useImperativeHandle(ref, () => ({
        checkReactor: () => isWhite
    }));
    useEffect(() => {
        const time = (Math.random() * 5 + 1) * 1000;
        setTimeout(() => {
            setIsWhite(true);
        }, time);
    }, []);
    return (
        <View style={`${styles.containner} ${isWhite ? styles.white : ''}`}>
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
    white: {
        backgroundColor: LIGHT_COLOR
    }
  });

export default forwardRef(WhenWhite);