import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

export default function MakePost({ navigation }) {
    const [eventTitle, setEventTitle] = useState('');
    const [eventDetails, setEventDetails] = useState('');

    const postEvent = () => {
        if(eventTitle.trim() !== '' && eventDetails.trim() !== '') {
            navigation.navigate('EventNearMe', {
                newPost: {
                    event: eventTitle,
                    text: eventDetails
                }
            });
        } else {
            alert("Please fill in both fields!");
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Event Title"
                value={eventTitle}
                onChangeText={setEventTitle}
            />

            <TextInput
                style={styles.input}
                placeholder="Event Details"
                value={eventDetails}
                onChangeText={setEventDetails}
                multiline
                numberOfLines={4}
            />

            <TouchableOpacity style={styles.button} onPress={postEvent}>
                <Text style={styles.buttonText}>Post Event</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        borderRadius: 5
    },
    button: {
        backgroundColor: '#667EEA',
        padding: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});
