import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, FlatList, Image, TouchableOpacity } from 'react-native';

export const globalStyles = StyleSheet.create({
  home_container: {
    flex: 1,
    backgroundColor: '#e0f0f0',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#9b82ba',
  },
  headerTitle: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  headerItems: {
  },
  headerText: {
    fontSize: 22,
    fontWeight: '500',
  },
  icon: {
    height: 50,
    width: 50,
  },
  scrollContent: {
    flex: 1,
    padding: 20,
    alignContent: 'center',
  },
  title: {
    textAlign: 'center',
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
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',  // This will place one button on each side
    borderTopWidth: 1,
    borderColor: '#ccc'
  },
  foodNearMeButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ddd'
  },
  schoolEventsButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ddd'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',  // This will place one button on each side
    borderTopWidth: 1,
    borderColor: '#ccc'
  },
  foodNearMeButton: {
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#e0f0f0',
      borderRadius: 15,
      borderWidth:2,
  },
  schoolEventsButton: {
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#e0f0f0',
      borderRadius: 15,
      borderWidth:2,
  },
});