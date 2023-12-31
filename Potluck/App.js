import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import FoodNearMe from './FoodNearMe';
import SignInScreen from './SignInScreen';
import EventNearMe from './EventNearMe';
import MakePost from './MakePost';

import React, { useState, useEffect } from 'react';
const Stack = createStackNavigator();

export default function App() {
  return (    
      
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeScreen} options= {{headerShown:false}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ 
          title: 'User Profile', 
          headerTitleAlign: 'center', 
          headerStyle: {
            backgroundColor: '#9b82ba',
          },
          }} />
        <Stack.Screen name="FoodNearMe" component={FoodNearMe} options={{ 
          title: 'Food', 
          headerTitleAlign: 'center', 
          headerStyle: {
            backgroundColor: '#9b82ba',
          },
          }} /> 
        <Stack.Screen name="EventNearMe" component={EventNearMe} options={{ 
          title: 'School Events', 
          headerTitleAlign: 'center',  
          headerStyle: {
            backgroundColor: '#9b82ba',
          },
          }} />
        <Stack.Screen name="MakePost" component={MakePost} options={{ 
          title: ' Make Posts ', 
          headerTitleAlign: 'center', 
          headerStyle: {
            backgroundColor: '#9b82ba',
          },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}