import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, Button, FlatList, Image } from 'react-native';

const IndividualPost = ({user, post}) => {

    return (
    <View  style={styles.container}>
        <View style={{flexDirection:'row'}}>
            <View><Image source={user.imageSource} style={styles.image}/></View>
            <View style={{flexDirection:'column'}}>
                <View><Text>{user.name}</Text></View>
                <View><Text>{post.location} · {post.types.join(', ')}</Text></View>
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
        borderBottomRightRadius: 20
    },
    image: {
        width: 50,
        height: 50, 
        borderRadius: 50,
        margin: 5,
        marginRight: 10
    }
});

export default IndividualPost;