import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, Modal, TextInput, TouchableOpacity  } from 'react-native';
import { getCurrentUser, getSampleReview, getSampleUser } from './utilities/testdata';
import Review from './objects/posts/Review';
import {Picker} from '@react-native-picker/picker';
import { userData } from './utilities/data';

export default function ProfileScreen({ navigation, route}) {

  const [newReviewModalVisible, setNewReviewModalVisible] = useState(false);
  const [headline, setHeadline] = useState('');
  const [message, setMessage] = useState(''); // state for a new comment
  const [rating, setRating] = useState(0.5);
  const sampleUser = getSampleUser();
  const sampleReview = getSampleReview();
  const [reviews, updateReviews] = useState(route.params.user.reviews); // state for all comments, initialized with a sample comment
  const [selectedLanguage, setSelectedLanguage] = useState();
  
  const addReview = () => {
    setNewReviewModalVisible(false);
    const review = {
      reviewRating: rating,
      message: message,
      headline: headline,
    }

    route.params.user.reviews.push(review);

    updateReviews(route.params.user.reviews);
  };

  return (
    <View style={styles.page}>
      <ScrollView style={styles.scrollContent}>
        <View style={styles.container}>

          {/* Profile pic placeholder */}
          <View style={styles.header}>
            <Image 
              style={styles.profilePic}
              source={route.params.user.imageSource}
            />

            {/* Stars */}
            <View style={{justifyContent: 'center', height: 100}}>
              <Text style={styles.starsText}>{route.params.user.rating} ⭐</Text>
            </View>


          </View>

          <View style={{height: 30}}>
            <Text style={styles.title}>{route.params.user.name}</Text>
          </View>





          <View style={{marginBottom: 10}}>
            <Text style={[styles.bodyText, {textAlign: 'center'}]}>2nd Year Computer Science</Text>
          </View>




          <View style={styles.body}>
            {/* Bio */}
            <View style={styles.verticalContainer}>
              <View style={styles.leftContainer}>
                <Text style={[styles.boldAndBiggerText, {textAlign: 'left'}]}>Bio: </Text>
                <Text style={[styles.bodyText, {textAlign: 'left'}]}>{route.params.user.bio}</Text>
              </View>
            </View>

            <View style={styles.buffer}>
            </View>

            <View style={styles.verticalContainer}>
              <View style={styles.leftContainer}>
                <Text style={[styles.boldAndBiggerText, {marginTop: 10}]}>Reviews</Text>
              </View>

              <View style={[styles.rightContainer, {paddingBottom: 0}]}>
                <Button title="+ Create New" onPress={() => setNewReviewModalVisible(true)}/> 
              </View>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              {reviews.map((userReview) => <Review user={getCurrentUser()} userReviewed={route.params.user} review={userReview} navigator={navigation}></Review>)}
            </View>
          </View>
          <Button title="Go Back" onPress={() => navigation.goBack()} /> 
          
        </View>

        
      </ScrollView>

      <Modal visible={newReviewModalVisible} animationType="fade" transparent={true}>
        
            <View style={styles.modalBackground}>
                <View style={styles.commentModal}>
                  <View style={{height: 100}}>

                    <Picker 
                        selectedValue={rating}
                        onValueChange={(itemValue, itemIndex) =>
                          setRating(itemValue)
                        }>
                        <Picker.Item label="0.5 ⭐" value={0.5} />
                        <Picker.Item label="1 ⭐" value={1.0} />
                        <Picker.Item label="1.5 ⭐" value={1.5} />
                        <Picker.Item label="2 ⭐" value={2} />
                        <Picker.Item label="2.5 ⭐" value={2.5} />
                        <Picker.Item label="3 ⭐" value={3} />
                        <Picker.Item label="3.5 ⭐" value={3.5} />
                        <Picker.Item label="4 ⭐" value={4} />
                        <Picker.Item label="4.5 ⭐" value={4.5} />
                        <Picker.Item label="5 ⭐" value={5} />
                      </Picker>
                  </View>
                    
                    <TextInput style={styles.commentInput} placeholderTextColor="gray" placeholder="Add a headline..." value={headline} onChangeText={setHeadline} />
                    <TextInput style={styles.commentInput} placeholderTextColor="gray" placeholder="Add a body..." value={message} onChangeText={setMessage} />
                    
                    <View style={styles.commentButtons}>
                        <TouchableOpacity style={styles.postButton} onPress={addReview}>
                            <Text style={styles.postButtonText}>Post</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton} onPress={() => {setNewReviewModalVisible(false), setMessage('')}}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
          
        </Modal>
      
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#e0f0f0'
  },
  container: {
    backgroundColor: '#e0f0f0',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'flex-start',
  },
  
  commentInput: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 7, // slightly rounded edges
  },
  cancelButtonText: {
      
  },
  commentButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
  },
  commentModal: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 10,
    marginRight: 5
  },
  header:{
    flexDirection: 'row',
    height: 100,
    marginBottom: 10
  },
  buffer:{
    height: 15
  },
  verticalContainer: {
    flexDirection: 'row',
    alignSelf: 'left',
    alignItems: 'left'
  },
  leftContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
    alignSelf: 'left',
  },
  rightContainer: {
    flexDirection: 'row',
    alignSelf: 'right',
    alignItems: 'right'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left'
  },
  postButton: {
      backgroundColor: '#3498db',
      padding: 8,
      flex: 1,
      marginRight: 5,
      borderRadius: 5,
  },
  postButtonText: {
      color: 'white',
      textAlign: 'center',
  },
  cancelButton: {
      backgroundColor: 'lightgray',
      padding: 8,
  },
  bodyText: {
    justifyContent: 'flex-start',
    fontSize: 16,
    color: 'black'
  },
  boldAndBiggerText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  starsText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
    justifyContent: 'center',
    marginLeft: 5
  },
  body: {
    
  }
});