import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import CityDetails from './CityDetails';


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
  initialRouteName: 'Home' },
);

export default Navigator;
