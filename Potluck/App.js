import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [dish, setDish] = useState(''); // State for the input
  const [dishes, setDishes] = useState([]); // State for the list of dishes

  const addDish = () => {
    if (dish.trim() !== '') {
      setDishes([...dishes, { id: Date.now().toString(), name: dish }]);
      setDish('');
     }
  }
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

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
