import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, Button, FlatList, Image, TouchableOpacity, Modal } from 'react-native';
import HomeScreen from '../../HomeScreen';



const IndividualPost = ({user, post, updateState, navigator}) => {
    const [commentModalVisible, setCommentModalVisible] = useState(false);
    const [comment, setComment] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    const addComment = () => {
        if (comment.trim() !== '') {
            post.comments.push(comment);
            setCommentModalVisible(false);
            setComment('');
        }
    };


    return (
    <View  style={styles.container}>
        <View style={{flexDirection:'row'}}>
            <View>
                <TouchableOpacity onPress={() => navigator.navigate('Profile', {user})}>
                    <Image source={user.imageSource} style={styles.image}/>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'column'}}>

                <View>
                    <TouchableOpacity onPress={() => navigator.navigate('Profile', {user})}>
                        <Text style={styles.text}>{user.name}  {user.rating}⭐</Text>
                    </TouchableOpacity>
                </View>



                <View>
                    <Text style={styles.text}>{post.location} · {post.types.join(', ')}</Text>
                </View>
                
            </View>
            
        </View>
        <View>
            <Text style={{margin: 5}}>{post.message}</Text>
        </View>
        <View style={styles.commentsBlock}>
            {post.comments.map((cmt, index) => <Text key={index} style={styles.comment}>{cmt}</Text>)}
        </View>
        <TouchableOpacity style={styles.commentTouch} onPress={() => {setCommentModalVisible(true)}}>
            <Text style={styles.commentButton}>💬 Comment</Text>
        </TouchableOpacity>

        <Modal visible={commentModalVisible} animationType="fade" transparent={true}>
            <View style={styles.modalBackground}>
                <View style={styles.commentModal}>
                    <TextInput style={styles.commentInput} placeholder="Add a comment..." value={comment} onChangeText={setComment} />
                    <View style={styles.commentButtons}>
                        <TouchableOpacity style={styles.postButton} onPress={addComment}>
                            <Text style={styles.postButtonText}>Post</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton} onPress={() => {setCommentModalVisible(false), setComment('')}}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>

    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%", 
        justifyContent: 'space-between', 
        borderWidth: 1, 
        borderTopRightRadius:20, 
        borderTopLeftRadius: 20, 
        borderBottomLeftRadius: 20, 
        borderBottomRightRadius: 20,
        padding: 5,
        margin: 5
    },
    image: {
        width: 30,
        height: 30, 
        borderRadius: 30,
        margin: 5,
        marginRight: 10
    },
    text: {
        fontSize: 15
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
    commentsBlock: {
        margin: 5
    },
    commentInput: {
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
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
    imageRow: {
        flexDirection: 'column ',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 20, // To ensure there's some spacing from the edges
        padding:40
    },
    title: {
        fontSize: 40, // Increase the size as per your requirement
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 50, // Optional: Increase space above and below the title
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
        borderRadius: 15,
        borderColor: 'blue',
        borderWidth: 1,
        margin: 3
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
    }
    
});

export default IndividualPost;