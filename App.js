import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StatusBar } from 'react-native';
import Home from './src/containers/Home';
import Game from './src/containers/Game';

StatusBar.setHidden(true);

const MainNavigator = createStackNavigator({
  Game: { screen: Game },
  Home: { screen: Home },
},{
  headerMode: 'none'
});

const App = createAppContainer(MainNavigator);

export default App;