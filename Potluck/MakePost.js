import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, FlatList, Image, TouchableOpacity, SafeAreaView, ScrollView, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function MakePost() {
    return (
        const postComment = () => {
            if (comment.trim() !== '') { // Changed 'Event.trim()' to 'comment.trim()'
              const postComment = {
                poster: getCurrentUser(),
                message: comment,
              };
              post.comments.push(postComment);
              setPostModalVisible(false); // Changed 'setCommentModalVisible' to 'setPostModalVisible'
              setComment('');
            }
          };
        (
            <SafeAreaView style={styles.container}>
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
                    </SafeAreaView>
          );
        };
    
    )
}