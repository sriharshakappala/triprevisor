import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import { AppRegistry } from 'react-native';
import Navigator from './app/components/Navigator';

// import HomeScreen from './app/components/HomeScreen';
// import App from './App';

AppRegistry.registerComponent('TripRevisor', () => Navigator);
