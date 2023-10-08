import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import IndividualPost from './objects/posts/IndividualPost';
import {getSampleUser, getSamplePost} from './utilities/testdata';

export default function App() {
  const [dish, setDish] = useState(''); // State for the input
  const [dishes, setDishes] = useState([]); // State for the list of dishes

  const addDish = () => {
    if (dish.trim() !== '') {
      setDishes([...dishes, { id: Date.now().toString(), name: dish }]);
      setDish('');
    }
  };

  return (
    <View style={styles.container}>
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

      <IndividualPost user={getSampleUser()} post={getSamplePost()}></IndividualPost>
      <IndividualPost user={getSampleUser()} post={getSamplePost()}></IndividualPost>
      <StatusBar style="auto" />
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
});
