import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Game({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Game Screen</Text>
      <Button 
        onPress={() => navigation.navigate('Home')}
        title="Click To Go Home"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
