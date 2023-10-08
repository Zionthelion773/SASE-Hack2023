import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import FoodNearMe from './FoodNearMe';  // <-- import the new screen
import { Button, BackHandler } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Potluck App',
            headerLeft: () => (
              <Button
                onPress={() => BackHandler.exitApp()}
                title="Logout"
                color="#000"
              />
            )
          }} 
        />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'User Profile' }} />
        <Stack.Screen name="FoodNearMe" component={FoodNearMe} options={{ title: 'Food' }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
