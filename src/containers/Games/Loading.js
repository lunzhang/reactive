import React, { forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { DARK_COLOR, LIGHT_COLOR } from '../../constants';

function Loading({ }, ref) {
    useImperativeHandle(ref, () => ({
        checkReactor: () => {}
    }));
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={LIGHT_COLOR} />
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

export default forwardRef(Loading);