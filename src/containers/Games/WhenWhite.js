import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, View } from 'react-native';

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
      flex: 1,
      backgroundColor: '#9e9e9e',
      justifyContent: 'center',
      alignItems: 'center'
    },
    white: {
        backgroundColor: '#fafafa'
    }
  });

export default forwardRef(WhenWhite);