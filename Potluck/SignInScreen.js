import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';

export default function SignInScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        if(username === "User" && password === "pass") {
            navigation.replace('Home');
        } else {
            Alert.alert('Error', 'Invalid credentials, please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back!</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#A9A9A9"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#A9A9A9"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#F2F3F7',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 50,
        color: '#434343',
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 20,
        marginBottom: 15,
        backgroundColor: '#FFF',
        fontSize: 16, // Added for larger text in the input fields
    },
    button: {
        height: 50,
        backgroundColor: '#667EEA',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
