import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, Button, FlatList, Image, TouchableOpacity } from 'react-native';

const Review = ({user, review, navigator}) => {

    

    const starImages = {
        0.5: require('./../assets/stars/0.5Stars.png'),
        1: require('./../assets/stars/1Stars.png'),
        1.5: require('./../assets/stars/1.5Stars.png'),
        2: require('./../assets/stars/2Stars.png'),
        2.5: require('./../assets/stars/2.5Stars.png'),
        3: require('./../assets/stars/3Stars.png'),
        3.5: require('./../assets/stars/3.5Stars.png'),
        4: require('./../assets/stars/4Stars.png'),
        4.5: require('./../assets/stars/4.5Stars.png'),
        5: require('./../assets/stars/5Stars.png'),
    };

    const numberOfStars = review.reviewRating;
    const picture = starImages.numberOfStars;

    return (
    <View  style={styles.container}>
        <View style={{flexDirection:'row'}}>
            <View>
                <TouchableOpacity onPress={() => navigator.navigate('Profile', {user})}>
                    <Image source={user.imageSource} style={styles.image}/>
                </TouchableOpacity>
            </View>


            <View style={{flexDirection:'column'}}>

                <View style={{flex: 1, justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => navigator.navigate('Profile', {user})}>
                        <Text style={styles.text}>{user.name}  {user.rating}⭐</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            
        </View>
        <View>
            <Image resizeMode="contain" style= {{height: 23, width:128, margin: 5}}source={picture}/>
            <Text style={{marginTop: 5, marginLeft: 5, fontWeight: 'bold'}}>{review.headline}</Text>
            <Text style={{margin: 5}}>{review.message}</Text> 
        </View>
    </View>
    );

}

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


export default Review;