// ForgotPassword.js

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';

export default function ForgotPassword({ navigation }) {
    const [email, setEmail] = useState('');

    const handleResetPassword = () => {
        // In a real-world application, you'll integrate this with your backend
        // to send a password reset email.
        
        Alert.alert('Reset Link Sent', 'A password reset link has been sent to your email address.');
        navigation.navigate('SignIn'); // Navigate back to Sign In after "sending" email
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                <Text style={styles.buttonText}>Send Reset Link</Text>
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
    },
    button: {
        height: 50,
        backgroundColor: '#667EEA',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    }
});
