import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import CityDetails from './CityDetails';
import Meteor from 'react-native-meteor';

Meteor.connect('ws://http://172.17.0.1:3000/websocket');

const Navigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  City: {
    screen: CityDetails,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.name
    }),
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'screen',
});

export default Navigator;
