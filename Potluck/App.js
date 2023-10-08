import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./Screens/home";
//import Navigator from "./routes/homeStack.js";
//import * as Font from 'expo-font';
//import { Assets } from 'react-navigation-stack';
//import AppLoading from 'expo-app-loading'

//const getFonts = () => Font.loadAsync({
//    'nunito-regular': require("./assets/fonts/Nunito-Regular.ttf"),
//    'nunito-bold': require("./assets/fonts/Nunito-Bold.ttf")
//  });


/* export default function App() {
  const[fontsLoaded, setFontsLoaded] = useState(false);
  if(fontsLoaded){
    return(
      <home />
    );
  }
  else {
    <AppLoading
      startAsync={getFonts}
      onFinish = {() => setFontsLoaded(true) }
      />
  }
}
*/
export default function App() {
  return(
    <Home />
  );
}
