import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import EventNearMe from './EventNearMe';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Potluck App' }} />
        <Stack.Screen name="EventNearMe" component={EventNearMe} options={{ title: 'EVENTS-NEAR-ME' }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
