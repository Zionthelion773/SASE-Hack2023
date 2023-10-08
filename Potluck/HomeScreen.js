import React, { useState } from 'react';
<<<<<<< HEAD
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
=======
import { Text, StyleSheet, View, TextInput, Button, FlatList, Image, TouchableOpacity, SafeAreaView, ScrollView, Modal } from 'react-native';

export default function HomeScreen({ navigation }) {
    const [dish, setDish] = useState('');
    const [dishes, setDishes] = useState([]);
    const [comment, setComment] = useState(''); // state for a new comment
    const [commentModalVisible, setCommentModalVisible] = useState(false); // modal visibility state
    const [activeImageId, setActiveImageId] = useState(null); // to track which image's comment button was pressed

    const [images, setImages] = useState([
        { id: '1', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntytKi83u6wRXBclcFJFfoEqV1AMZ_g53JQ&usqp=CAU', comments: [] },
        // ... repeat for other images if needed ...
        { id: '2', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntytKi83u6wRXBclcFJFfoEqV1AMZ_g53JQ&usqp=CAU', comments: [] },
        { id: '3', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntytKi83u6wRXBclcFJFfoEqV1AMZ_g53JQ&usqp=CAU', comments: [] },
        { id: '4', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntytKi83u6wRXBclcFJFfoEqV1AMZ_g53JQ&usqp=CAU', comments: [] },
        { id: '5', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntytKi83u6wRXBclcFJFfoEqV1AMZ_g53JQ&usqp=CAU', comments: [] },
        { id: '6', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntytKi83u6wRXBclcFJFfoEqV1AMZ_g53JQ&usqp=CAU', comments: [] },
        { id: '7', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntytKi83u6wRXBclcFJFfoEqV1AMZ_g53JQ&usqp=CAU', comments: [] },
        { id: '8', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntytKi83u6wRXBclcFJFfoEqV1AMZ_g53JQ&usqp=CAU', comments: [] },
        ]);

    const addComment = () => {
        if (comment.trim() !== '') {
            const updatedImages = images.map(img => {
                if (img.id === activeImageId) {
                    return { ...img, comments: [...img.comments, comment] };
                }
                return img;
            });
            setImages(updatedImages);  // Use setImages to update the images state
            setComment('');
            setCommentModalVisible(false);
        }
    };


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

                <View style={styles.imageRow}>
            {images.map((image) => (
                <View key={image.id} style={styles.imageContainer}>
                    <Image style={styles.placeholderImage} source={{ uri: image.uri }} />
                    <TouchableOpacity onPress={() => { setActiveImageId(image.id); setCommentModalVisible(true); }}>
                        <Text style={styles.commentButton}>💬 Comment</Text>
                    </TouchableOpacity>
                    {image.comments.map((comment, index) => <Text key={index} style={styles.comment}>{comment}</Text>)}
                </View>
            ))}
        </View>

        <Modal visible={commentModalVisible} animationType="slide">
            <View style={styles.commentModal}>
                <TextInput
                    style={styles.commentInput}
                    placeholder="Add a comment..."
                    value={comment}
                    onChangeText={setComment}
                />
                <Button title="Post" onPress={addComment} />
                <Button title="Cancel" onPress={() => setCommentModalVisible(false)} />
            </View>
        </Modal>
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
  imageRow: {
    flexDirection: 'column ',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20, // To ensure there's some spacing from the edges
    padding:40
},

imageRow: {
    flexDirection: 'column',  // Adjusted to display images in a column
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
},
placeholderImage: {
    width: 200,
    height: 200,
    marginVertical: 200,  // Space added between images vertically
},
imageRow: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 100,
},
placeholderImage: {
    width: 200,
    height: 200,
    marginVertical: 200,
},
commentButton: {
    color: 'blue',
    marginTop: 5,
},
comment: {
    fontSize: 12,
    color: 'gray',
},
commentModal: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
},
commentInput: {
>>>>>>> 7c99683c7832f42a3bfe3333178e205088201811
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
});
>>>>>>> 7c99683c7832f42a3bfe3333178e205088201811
