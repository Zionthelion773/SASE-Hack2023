import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, FlatList, Image, TouchableOpacity } from 'react-native';

export const globalStyle = StyleSheet.create({
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
      listItem: {
        width: '100%',
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
      },
      profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25, 
      }
});