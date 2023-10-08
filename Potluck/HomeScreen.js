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
<<<<<<< HEAD
  },
  listItem: {
    width: '100%',
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
=======
},
<<<<<<< HEAD
});
>>>>>>> 7c99683c7832f42a3bfe3333178e205088201811
=======
imageRow: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
},
placeholderImage: {
    width: 200,
    height: 200,
    marginBottom: 20, // reduced space between image and comments
},
comment: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5, // to separate each comment
},
commentButton: {
    color: 'blue',
    marginBottom: 15, // space added between comments and comment button
},
modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
},
commentModal: {
    width: '80%', // takes 80% of screen width
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15, // rounded corners
},
commentInput: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 7, // slightly rounded edges
},
commentButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between', // spaces out the buttons
},
addButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
},
addButtonText: {
    color: 'white',
    textAlign: 'center',
},
commentModal: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
},
commentTouch: {
    borderRadius: 7,
    borderColor: 'blue',
    borderWidth: 1,
    marginTop: 8,
},
commentButton: {
    color: 'blue',
    textAlign: 'center',
    padding: 3,
},
commentButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
},
postButton: {
    backgroundColor: '#3498db',
    padding: 8,
    flex: 1,
    marginRight: 5,
    borderRadius: 5,
},
postButtonText: {
    color: 'white',
    textAlign: 'center',
},
cancelButton: {
    backgroundColor: 'lightgray',
    padding: 8,
},
});
>>>>>>> d595792c (best commit so far)
