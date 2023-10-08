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
import MakePost from './MakePost';


const Stack = createStackNavigator();

export default function App() {
  return (    
      
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeScreen} options= {{headerShown:false}}
        />
         <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'User Profile', headerTitleAlign: 'center', }} />
        <Stack.Screen name="FoodNearMe" component={FoodNearMe} options={{ title: 'Food', headerTitleAlign: 'center',  }} /> 
        <Stack.Screen name="EventNearMe" component={EventNearMe} options={{ title: 'School Events', headerTitleAlign: 'center',  }} />
        <Stack.Screen name="MakePost" component={MakePost} options={{ title: ' Make Posts ', headerTitleAlign: 'center', }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}