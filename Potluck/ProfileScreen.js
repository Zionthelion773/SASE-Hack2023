import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Profile pic placeholder */}
      <Image 
        style={styles.profilePic}
        source={{uri: 'https://via.placeholder.com/50'}}
      />

      {/* Bio and Tier */}
      <View style={styles.bioTierContainer}>
        <Text style={styles.title}>Bio: </Text>
        <Text style={styles.boldAndBiggerText}>Tier: </Text>
      </View>

      {/* Stars */}
      <Text style={styles.boldAndBiggerText}>Stars: ⭐⭐⭐⭐⭐</Text>

      {/* Major Info */}
      <Text style={[styles.boldAndBiggerText, styles.majorInfo]}>Major Info: </Text>

      {/* Current Reviews */}
      <Text style={[styles.boldAndBiggerText, styles.reviews]}>Current Reviews: </Text>

      <Text style={[styles.boldAndBiggerText, styles.reviews]}>"Wow the food that Noah Kim let me use was perfect and saved me so much time and money! Def a 5 star review from me!"</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
  },
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 30, 
    marginBottom: 10
  },
  bioTierContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    color: 'white'
  },
  boldAndBiggerText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white'
  },
  majorInfo: {
    alignSelf: 'flex-end',
    marginTop: 20
  },
  reviews: {
    alignSelf: 'flex-start',
    marginBottom: 20
  }
});