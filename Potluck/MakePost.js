import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, FlatList, Image, TouchableOpacity, SafeAreaView, ScrollView, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'


const newPost = () => {
    setShowModal(true);
  };
  
export default function MakePost() {

    return (
        <View>
            <Modal visible={showModal} animationType="slide">
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Choose Post Type</Text>
                    <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => {
                        setPostChoice('event');
                        setShowModal(false);
                    }}
                    >
                    <Text style={styles.modalButtonText}>Post an Event</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => {
                        setPostChoice('food');
                        setShowModal(false);
                    }}
                    >
                    <Text style={styles.modalButtonText}>Give Excess Food Away</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}
