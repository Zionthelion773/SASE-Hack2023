import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'



export default function EventNearMe() {
  const textBlurbs = [
    {
      id: 1,
      event: "Tennis Club US Open Watch Party!",
      text:
        "This is a long text blurb. It can be even longer... this is very long to long for it to fit on the screen even longer than you thought hahahahahahah so long, not over just yet. Ok, it's over now lololol XD",
    },
    {
      id: 2,
      event: "Squirrel Club Study Event (╯°□°)╯︵ ┻━┻",
      text:
        "This is a long text blurb. It can be even longer... this is very long to long for it to fit on the screen even longer than you thought hahahahahahah so long, not over just yet. Ok, it's over now lololol XD",
    },
    {
      id: 3,
      event: "ASA trip to Chinatown uWu",
      text:
        "This is a long text blurb. It can be even longer... this is very long to long for it to fit on the screen even longer than you thought hahahahahahah so long, not over just yet. Ok, it's over now lololol XD",
    },
    {
        id: 4,
        event: "SASE free glizzy bro",
        text:
          "This is a long text blurb. It can be even longer... this is very long to long for it to fit on the screen even longer than you thought hahahahahahah so long, not over just yet. Ok, it's over now lololol XD",
      },
  ];


  const titlePressed = () => {
    
  }


  const [showFullText, setShowFullText] = useState({});
  const toggleShowFullText = (id) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.title}>ALL SCHOOL EVENTS TODAY :-D!</Text>
        <TouchableOpacity onPress={titlePressed}>
         <Text style={styles.button1}>SEARCH-DATE</Text>
        </TouchableOpacity>  
        <TouchableOpacity onPress={titlePressed}>
         <Text style={styles.button2}>CATEGORY</Text>
        </TouchableOpacity>  

        {textBlurbs.map((blurb) => (
          <View style={styles.headerContainer} key={blurb.id}>
            <View style={styles.textContainer}>
              <Text style={styles.event}>{blurb.event}</Text>
              <Text
                style={showFullText[blurb.id] ? styles.fullText : styles.truncatedText}
              >
                {showFullText[blurb.id] ? blurb.text : blurb.text.substring(0, 100)}
              </Text>
              {blurb.text.length > 100 && (
                <TouchableOpacity onPress={() => toggleShowFullText(blurb.id)}>
                  <Text style={styles.seeMore}>
                    {showFullText[blurb.id] ? "See Less" : "See More"}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    
  },

  title: {
    backgroundColor: "lightgray",
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
    top: 9,
    right: 8,
    borderWidth: 10,
    borderColor: 'gold',

    padding: 10,
  },
  button1: {
    backgroundColor: "gray",
    fontSize: 8,
    fontWeight: "bold",
    left: 280,
    padding: 5,
    bottom: 48,
    borderWidth: 4,
    borderColor: 'gold',


 
  },
  button2: {
    backgroundColor: "white",
    fontSize: 8,
    fontWeight: "bold",
    left: 280,
    padding: 5,
    bottom: 48,
    borderWidth: 4,
    borderColor: 'gold',

 
  },
  

  event: {
    backgroundColor: "white",
    fontSize: 14,
    fontWeight: "bold",
    padding: 10,
    alignSelf: "center",
    marginBottom: 10,

  },

  headerContainer: {
    backgroundColor: "white",
    padding: 10,
    alignSelf: "center",
    marginBottom: 20,


  },

  textContainer: {},
  truncatedText: {
    fontSize: 16,
    fontFamily: "Times New Roman",
    
  },

  fullText: {
    fontSize: 16,
    fontFamily: "Times New Roman",
  },

  seeMore: {
    color: "blue",
  },
});