import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { globalStyle } from './global';
import { MaterialIcons } from '@expo/vector-icons'

const Logout = () => {
    navigation
}

 export default function Header() {
    return (
        <View style={Styles.header}>
            <View style={Styles.headerItems}>
                <MaterialIcons name='logout' size= {50} onPress={Logout} style={Styles.icon}   />
            </View>

            <View style={Styles.headerItems}>
                <Text style={Styles.headerText}> Potluck! </Text>
            </View>

            <View style={Styles.headerItems}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image 
                    style={globalStyle.profileImage}
                    source={{uri: 'https://via.placeholder.com/50'}}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )
 }

const Styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#666090',
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,

    },

    headerItems: {
        marginVertical: 10
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    icon: {
        height: 50,
        width: 50
    }
 })