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
        <View>
            <Text> Wassup dawg</Text>
        </View>
    )
}