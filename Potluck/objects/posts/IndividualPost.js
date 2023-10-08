import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, Button, FlatList, Image, TouchableOpacity } from 'react-native';

const IndividualPost = ({user, post, navigator}) => {

    return (
    <View  style={styles.container}>
        <View style={{flexDirection:'row'}}>
            <View><TouchableOpacity onPress={() => navigator.navigate('Profile')}><Image source={user.imageSource} style={styles.image}/></TouchableOpacity></View>
            <View style={{flexDirection:'column'}}>
                <View><TouchableOpacity onPress={() => navigator.navigate('Profile')}><Text style={styles.text}>{user.name}</Text></TouchableOpacity></View>
                <View><Text style={styles.text}>{post.location} · {post.types.join(', ')}</Text></View>
            </View>
            
        </View>
        <View>
            <Text style={{margin: 5}}>{post.message}</Text>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%", 
        justifyContent: 'space-between', 
        borderWidth: 1, 
        borderTopRightRadius:20, 
        borderTopLeftRadius: 20, 
        borderBottomLeftRadius: 20, 
        borderBottomRightRadius: 20,
        padding: 5,
        margin: 5
    },
    image: {
        width: 30,
        height: 30, 
        borderRadius: 30,
        margin: 5,
        marginRight: 10
    },
    text: {
        fontSize: 15
    }
});

export default IndividualPost;