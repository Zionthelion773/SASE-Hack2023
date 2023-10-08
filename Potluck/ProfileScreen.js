import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

export default function ProfileScreen({ navigation, route}) {
  return (
    <ScrollView>
      <View style={styles.container}>

        {/* Profile pic placeholder */}
        <View style={styles.header}>
          <Image 
            style={styles.profilePic}
            source={route.params.user.imageSource}
          />

          {/* Stars */}
          <View style={{justifyContent: 'center', height: 100}}>
            <Text style={styles.starsText}>{route.params.user.rating} ⭐</Text>
          </View>


        </View>

        <View style={{height: 30}}>
          <Text style={styles.title}>{route.params.user.name}</Text>
        </View>





        <View style={{marginBottom: 10}}>
          <Text style={[styles.bodyText, {textAlign: 'center'}]}>2nd Year Computer Science</Text>
        </View>




        <View style={styles.body}>
          {/* Bio */}
          <View style={styles.verticalContainer}>
            <View style={styles.leftContainer}>
              <Text style={[styles.boldAndBiggerText, {textAlign: 'left'}]}>Bio: </Text>
              <Text style={[styles.bodyText, {textAlign: 'left'}]}>{route.params.user.bio}</Text>
            </View>
          </View>

          <View style={styles.buffer}>
          </View>

          <View style={styles.verticalContainer}>
            <View style={styles.leftContainer}>
              <Text style={styles.boldAndBiggerText}>Reviews</Text>
            </View>
          </View>
        </View>

        <Button title="Go Back" onPress={() => navigation.goBack()} /> 
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'flex-start',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 10,
    marginRight: 5
  },
  header:{
    flexDirection: 'row',
    height: 100,
    marginBottom: 10
  },
  buffer:{
    height: 20
  },
  verticalContainer: {
    flexDirection: 'row',
    alignSelf: 'left',
    alignItems: 'left'
  },
  leftContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
    alignSelf: 'left',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left'
  },
  bodyText: {
    justifyContent: 'flex-start',
    fontSize: 16,
    color: 'black'
  },
  boldAndBiggerText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  starsText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
    justifyContent: 'center',
    marginLeft: 5
  },
  body: {
    
  }
});
