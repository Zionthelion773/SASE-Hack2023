import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import IndividualPost from './objects/posts/IndividualPost';
import {getSampleUser, getSamplePost} from './utilities/testdata';

export default function HomeScreen({ navigation }) {
  const [dish, setDish] = useState('');
  const [dishes, setDishes] = useState([]);

  const addDish = () => {
    if (dish.trim() !== '') {
      setDishes([...dishes, { id: Date.now().toString(), name: dish }]);
      setDish('');
    }
  };

  return (
    <View style={styles.container}>

      {/* Profile Image Button */}
      <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Profile')}>
        <Image 
          style={styles.profileImage}
          source={{uri: 'https://via.placeholder.com/50'}}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Potluck Dishes</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter a dish..."
        value={dish}
        onChangeText={setDish}
      />

      <Button title="Add Dish" onPress={addDish} />
      
      <FlatList 
        data={dishes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.name}</Text>
          </View>
        )}
      />

      <IndividualPost user={getSampleUser()} post={getSamplePost()} navigator={navigation}></IndividualPost>
      <IndividualPost user={getSampleUser()} post={getSamplePost()}></IndividualPost>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  listItem: {
    width: '100%',
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  profileButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25, 
  }
});