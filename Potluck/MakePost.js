import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, FlatList, Image, TouchableOpacity, SafeAreaView, ScrollView, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'



export default function MakePost() {
const [showModal, setShowModal] = useState(false);
const [postChoice, setPostChoice] = useState(null);

const newPost = () => {
    setShowModal();
  };

    return (
        <View>
            <ScrollView>
                <Text style={styles.button1}>Post Excess Food to Give Awaye</Text>
                <Text style={styles.button2}>Post a School Event</Text>
            </ScrollView>
        </View>
    );
}
button1: {
    backgroundColor: "gray",
    fontSize: 8,
    fontWeight: "bold",
    left: 280,
    padding: 5,
    bottom: 48,
    borderWidth: 4,
    borderColor: 'gold',
}
});
