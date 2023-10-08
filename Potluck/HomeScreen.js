import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, FlatList, SafeAreaView} from 'react-native';

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
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Potluck Dishes</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a dish..."
        value={dish}
        onChangeText={setDish}
      />
      <Button title="Add Dish" onPress={addDish} />
      <Button
        title="EVENTS-NEAR-ME"
        onPress={() => navigation.navigate('EventNearMe')}
      />
      <FlatList
        data={dishes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SafeAreaView style={styles.listItem}>
            <Text>{item.name}</Text>
          </SafeAreaView>
        )}
      />
    </SafeAreaView>
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
