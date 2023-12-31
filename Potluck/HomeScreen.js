import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, FlatList, Image, TouchableOpacity, SafeAreaView, ScrollView, Modal, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import SignInScreen from './SignInScreen';
import IndividualPost from './objects/posts/IndividualPost';
import {getSampleUser, getSamplePost2, getSampleUser2, getSamplePost, getCurrentUser, getSampleReview} from './utilities/testdata';
import Review from './objects/posts/Review';
import { globalStyles } from './global';

export default function HomeScreen({ navigation }) {
    const [comment, setComment] = useState(''); // state for a new comment
    const [commentModalVisible, setCommentModalVisible] = useState(false); // modal visibility state
    const [activeImageId, setActiveImageId] = useState(null); // to track which image's comment button was pressed
    const user = getCurrentUser(); 

    const [images, setImages] = useState([
        //{ id: '1', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh_cDQjjJyHUAB9l03_46LSDtAQvLdnXW73g&usqp=CAU', comments: [] },
        //{ id: '2', uri: 'https://thumbs.dreamstime.com/b/heart-shape-various-vegetables-fruits-healthy-food-concept-isolated-white-background-140287808.jpg', comments: [] },
       // { id: '3', uri: 'https://as2.ftcdn.net/v2/jpg/01/14/94/97/1000_F_114949767_xZQQ44nmmZRzvRFJ71szQundwrTSrVuf.jpg', comments: [] },
       // { id: '4', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9lVq8fMZJOzOa9229AXJv9IoarhKHB3iRQ&usqp=CAU', comments: [] },
       // { id: '5', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7MyVF5ZIUzn34gtIT9WmZVIcC7EalPWXcw&usqp=CAU', comments: [] },
       // { id: '6', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbnyD8yXdt1E6Q4QV7UPHdjV_yqr4kUb2GA&usqp=CAU', comments: [] },
       // { id: '7', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTko1AHqotfjLFB6BAUbulrYmWzdnOVN3VCYg&usqp=CAU', comments: [] },
       // { id: '8', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntytKi83u6wRXBclcFJFfoEqV1AMZ_g53JQ&usqp=CAU', comments: [] },
         // ... repeat for other images if needed ...
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

    return (
        
        <SafeAreaView style={globalStyles.home_container}>

            <View style={globalStyles.header}>
                <View style={globalStyles.headerItems}>
                    <MaterialIcons name='logout' size= {50} style={globalStyles.icon} onPress={() => navigation.navigate('SignIn')} />
                </View>

                <View style={globalStyles.headerItems}>
                    <Text style={globalStyles.headerText}> Potluck! </Text>
                </View>

                <View style={globalStyles.headerItems}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile', {user})}>
                        <Image style={globalStyles.profileImage} source={getCurrentUser().imageSource} />
                    </TouchableOpacity>
                </View>

            </View>

            <ScrollView style={globalStyles.scrollContent}>

                <Text style={globalStyles.title}> Welcome!! </Text>

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
                <IndividualPost user={getSampleUser()} post={getSamplePost()} updateState={setCommentModalVisible} navigator={navigation}></IndividualPost>
                <IndividualPost user={getSampleUser2()} post={getSamplePost2()} updateState={setCommentModalVisible} navigator={navigation}></IndividualPost>

            </ScrollView>

            <Modal visible={commentModalVisible} animationType="fade" transparent={true}>
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
                <TouchableOpacity style={globalStyles.foodNearMeButton} onPress={() => navigation.navigate('FoodNearMe')}>
                    <Text style={styles.buttonText}>Food Near Me</Text>
                </TouchableOpacity>

                <TouchableOpacity style={globalStyles.makePostButton} onPress={() => navigation.navigate('MakePost')}>
                    <MaterialIcons name='add' size= {50} style={globalStyles.icon}   />
                </TouchableOpacity>

                <TouchableOpacity style={globalStyles.schoolEventsButton} onPress={() => navigation.navigate('EventNearMe')}>
                    <Text style={styles.buttonText}>School Events</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

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

    imageRow: {
        flexDirection: 'column ',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 20, // To ensure there's some spacing from the edges
        padding:40
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
    centeredContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
        backgroundColor: '#9b82ba',
        paddingHorizontal: 25,
    },

});