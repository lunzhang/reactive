import React, { forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Loading({ }, ref) {
    useImperativeHandle(ref, () => ({
        checkReactor: () => {}
    }));
    return (
        <View style={styles.containner}>
            <Text>Loading</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9e9e9e',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

export default forwardRef(Loading);