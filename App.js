import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/containers/Home';
import Game from './src/containers/Game';

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Game: { screen: Game },
});

const App = createAppContainer(MainNavigator);

export default App;