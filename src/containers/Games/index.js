import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import WhenWhite from './WhenWhite';
import Loading from './Loadinng';

function Games({ gameType }, ref) {
    const gameElem = useRef(null);
    const renderGame = () => {
        switch (gameType) {
            case 'when-white': {
                return <WhenWhite ref={gameElem} />;
            }
            default: {
                return <Loading ref={gameElem} />;
            }
        }
    };
    useImperativeHandle(ref, () => ({
        checkReactor: gameElem.current.checkReactor
    }));
    return (
        <View>
            {renderGame()}
        </View>
    );
};

export default forwardRef(Games);