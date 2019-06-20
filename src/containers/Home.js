import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button 
            onPress={() => navigation.navigate('Game')}
            title="Press To Go Game"
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
