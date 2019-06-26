import React, { forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

function Games({ }, ref) {
    useImperativeHandle(ref, () => ({
        checkReactor: () => {
            
        }
    }));
    return (
        <View>

        </View>
    );
};

export default forwardRef(Games);