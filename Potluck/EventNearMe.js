import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';

export default function EventNearMe() {
  const textBlurbs = [
    {
      id: 1,
      text: "This is a long text blurb. It can be even longer... this is very long to long for it to fit on the screen even longer than you thought hahahahahahah so long, not over just yet. Ok, it's over now lololol XD",},
    {
      id: 2,
      text: "This is a long text blurb. It can be even longer... this is very long to long for it to fit on the screen even longer than you thought hahahahahahah so long, not over just yet. Ok, it's over now lololol XD",},
    {
      id: 3,
      text: "This is a long text blurb. It can be even longer... this is very long to long for it to fit on the screen even longer than you thought hahahahahahah so long, not over just yet. Ok, it's over now lololol XD",},
  ];

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
      <Text style={styles.title}>SCHOOL EVENTS :-D!</Text>
      <Text style={styles.event1}>Tennis Club US Open Watch Party!</Text>
      <Text style={styles.event2}>Squirrel Club Study Event (╯°□°)╯︵ ┻━┻</Text>
      <Text style={styles.event3}>ASA trip to Chinatown uWu</Text>
      
      {textBlurbs.map((blurb) => (
        <View style={styles.headerContainer} key={blurb.id}>
          <View style={styles.textContainer}>
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
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    backgroundColor: "lightgray",
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
    right: 0,
    bottom: 20,
  },

  event1: {
    backgroundColor: "lightgray",
    fontSize: 14,
    fontWeight: "bold",
    padding: 10,
    right: 1,
    bottom: -35,
  },

  event2: {
    backgroundColor: "lightgray",
    fontSize: 14,
    fontWeight: "bold",
    padding: 10,
    right: -5,
    bottom: -170,
  },

  event3: {
    backgroundColor: "lightgray",
    fontSize: 14,
    fontWeight: "bold",
    padding: 10,
    right: 20,
    bottom: -305,
  },

  headerContainer: {
    backgroundColor: "white",
    padding: 10,
    bottom: 35,
    marginBottom: 100,
    width: "90%",
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
