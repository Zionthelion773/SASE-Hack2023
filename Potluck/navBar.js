import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function NavBar({ navigation }) {
  return (
    <View style={styles.nav}>
      <Text style={styles.siteTitle}>SCHOOL EVENTS</Text>
      <View style={styles.navLinks}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DateOfEvent')} // Navigate to 'DateOfEvent' screen
        >
          <Text style={styles.navLink}>DATE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SearchEvent')} // Navigate to 'SearchEvent' screen
        >
          <Text style={styles.navLink}>SEARCH</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 10,
  },
  siteTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  navLinks: {
    flexDirection: 'row',
  },
  navLink: {
    marginHorizontal: 10,
    color: 'blue',
    fontWeight: 'bold',
  },
});
