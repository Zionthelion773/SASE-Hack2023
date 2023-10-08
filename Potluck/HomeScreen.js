import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, FlatList, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

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
            <ScrollView style={styles.scrollContent}>
                <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Profile')}>
                    <Image
                        style={styles.profileImage}
                        source={{ uri: 'https://via.placeholder.com/50' }}
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
            </ScrollView>
            
              {/* Fixed Food Near Me Button */}
              <TouchableOpacity style={styles.foodNearMeButton} onPress={() => navigation.navigate('FoodNearMe')}>
                    <Text>Find Food Near Me</Text>
                </TouchableOpacity>

                {/* New button for Check School Events */}
                <TouchableOpacity style={styles.schoolEventsButton} onPress={() => navigation.navigate('EventNearMe')}>
                    <Text>Check School Events</Text>
                </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flex: 1,
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
        top: 0,
        right: 10,
        padding: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',  // This will place one button on each side
      borderTopWidth: 1,
      borderColor: '#ccc'
  },

  foodNearMeButton: {
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#ddd'
  },

  schoolEventsButton: {
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#ddd'
  },
});