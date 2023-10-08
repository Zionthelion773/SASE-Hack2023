import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, FlatList, Image, TouchableOpacity, SafeAreaView, ScrollView, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import SignInScreen from './SignInScreen';

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

            <View style={styles.header}>
                <View style={styles.headerItems}>
                    <MaterialIcons name='logout' size= {50} style={styles.icon} onPress={() => navigation.navigate('SignIn')} />
                </View>

                <View style={styles.headerItems}>
                    <Text style={styles.headerText}> Potluck! </Text>
                </View>

                <View style={styles.headerItems}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Image style={styles.profileImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpLOH5QrBomi0Ct9U67OGbBVDWqHGl3WHmQ&usqp=CAU' }} />
                    </TouchableOpacity>
                </View>

            </View>

            <ScrollView style={styles.scrollContent}>
                
                <View style={styles.centeredContent}>
                    <Text>Posts and Events in the area</Text>
                </View>
                

                <View style={styles.imageRow}>
                    {images.map((image) => (
                        <View key={image.id} style={styles.imageContainer}>
                            <Image style={styles.placeholderImage} source={{ uri: image.uri }} />
                            {image.comments.map((cmt, index) => <Text key={index} style={styles.comment}>{cmt}</Text>)}
                            <TouchableOpacity style={styles.commentTouch} onPress={() => { setActiveImageId(image.id); setCommentModalVisible(true); }}>
                                <Text style={styles.commentButton}>💬 Comment</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>

            <Modal visible={commentModalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalBackground}>
                    <View style={styles.commentModal}>
                        <TextInput style={styles.commentInput} placeholder="Add a comment..." value={comment} onChangeText={setComment} />
                        <View style={styles.commentButtons}>
                            <TouchableOpacity style={styles.postButton} onPress={addComment}>
                                <Text style={styles.postButtonText}>Post</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cancelButton} onPress={() => setCommentModalVisible(false)}>
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Fixed Buttons at the Bottom */}
            <View style={styles.bottomButtons}>
                <TouchableOpacity style={styles.foodNearMeButton} onPress={() => navigation.navigate('FoodNearMe')}>
                    <Text style={styles.buttonText}>Find Food Near Me</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.makePostButton} onPress={() => navigation.navigate('MakePost')}>
                    <MaterialIcons name='add' size= {50} style={styles.icon}   />
                </TouchableOpacity>

                <TouchableOpacity style={styles.schoolEventsButton} onPress={() => navigation.navigate('EventNearMe')}>
                    <Text style={styles.buttonText}>Check School Events</Text>
                </TouchableOpacity>
            </View>
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
bottomButtons: {
    width: '100%',
    height: '8%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#666090',
},
header: {
    display: 'flex',
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
=======
},
});
>>>>>>> 7c99683c7832f42a3bfe3333178e205088201811
