import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import FoodNearMe from './FoodNearMe';  // <-- import the new screen
import { Button, BackHandler } from 'react-native';
import SignInScreen from './SignInScreen';
import { StackActions } from '@react-navigation/native';
import EventNearMe from './EventNearMe';


const Stack = createStackNavigator();

export default function App() {
  return (    
      
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Sign In' }} />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={({ navigation }) => ({
              title: 'Potluck App',
              headerLeft: () => (
                  <Button
                      onPress={() => {
                          navigation.dispatch(StackActions.popToTop());
                          navigation.replace('SignIn');
                      }}
                      title="Logout"
                      color="#000"
                  />
              )
          })} 
        />
         <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'User Profile' }} />
        <Stack.Screen name="FoodNearMe" component={FoodNearMe} options={{ title: 'Food' }} /> 
        <Stack.Screen name="EventNearMe" component={EventNearMe} options={{ title: 'School Events' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}