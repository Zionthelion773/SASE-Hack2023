import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, Button, FlatList, Image, TouchableOpacity } from 'react-native';

const Review = ({}) => {

    return (
    <View  style={styles.container}>
        <View style={{flexDirection:'row'}}>
            <View>
                <TouchableOpacity onPress={() => navigator.navigate('Profile', {user})}>
                    <Image source={user.imageSource} style={styles.image}/>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'column'}}>

                <View>
                    <TouchableOpacity onPress={() => navigator.navigate('Profile', {user})}>
                        <Text style={styles.text}>{user.name}  {user.rating}⭐</Text>
                    </TouchableOpacity>
                </View>



                <View>
                    <Text style={styles.text}>{post.location} · {post.types.join(', ')}</Text>
                </View>
                
            </View>
            
        </View>
        <View>
            <Text style={{margin: 5}}>{post.message}</Text>
        </View>
    </View>
    );

}