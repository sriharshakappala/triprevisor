import React from 'react';
import { ScrollView, Text } from 'react-native';

const CityDetails = ({ navigation }) => (
  <ScrollView>
    <Text>Hello, {navigation.state.params.name}!!</Text>
  </ScrollView>
);

export default CityDetails;
