import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function EventNearMe() {
  const textBlurbs = [
    {
      id: 1,
      event: "🎾Tennis Club US Open Watch Party!🎾",
      text: "🎾 Join Us for the Tennis Club US Open Watch Party! 🎾Get ready for a grand slam of an evening! The Tennis Club is hosting a thrilling US Open Watch Party. We'll have popcorn, chips, and cookies ready as you cheer for your favorite players on the big screen."
    },
    {
      id: 2,
      event: " 📚Squirrel Club Study Event (╯°□°)╯︵ ┻━┻ 📚",
      text:
        "Get ready to hit the books with the Squirrel Club!! Join us for a productive study session at the Library. We're providing a study-friendly environment along with snacks to keep you energized, including redbulls and chips. Don't flip the table—flip those pages and ace your exams with us! 📖🍿📚"
    },
    {
      id: 3,
      event: "🌆 ASA Trip to Chinatown uWu 🌆",
      text:
        "Join the Asian American Student Association (ASA) for an exciting trip to Chinatown! Explore the vibrant culture, delicious cuisine, and rich history of this iconic neighborhood. We'll be meeting at MTCC and embarking on a cultural adventure. Don't miss out on this uWu-some experience with ASA! 🏮🥠🚌"

    },
    {
        id: 4,
        event: "📝 SASE Resume Workshop 📝",
        text:
          "Calling all aspiring scientists and engineers! The Society of Asian Scientists and Engineers (SASE) invites you to our Resume Workshop. Whether you're looking to polish your existing resume or create one from scratch, our experts are here to help. Join us at RE 104 and equip yourself with valuable resume-building skills. As a bonus, we'll be serving snacks like bananas and pudding to keep you fueled during the workshop. Don't miss this opportunity to take your career to the next level with SASE! 💼🍪🔬",
      },
      {
        id: 5,
        event: "🌟 Delta Tau Lua Rush Event! 🌟",
        text:
          "Calling all adventure seekers! Join us for an exciting rush event at Delta Tau Lua! 🍔 We're serving mouthwatering BBQ Pork Sliders and more! 🎉 Get to know our amazing members and discover the adventure that awaits you. Don't miss out on a chance to be part of something extraordinary. See you there! 🤙🏄‍♂️🏝️",
      },
      {
      id: 6,
        event: "🌟 Spikeball and Sandwiches Event! 🌟",
        text:
          "Get ready for a thrilling day of Spikeball and delicious sandwiches! Join us for an exciting match and some mouthwatering bites. Bring your A-game and your appetite for fun!",
        },
        {
        id: 7,
        event: "🎳 Bog, Bowling, and Burgers Night! 🎳",
        text:
            "Calling all bowling enthusiasts! Join us for an evening of bowling, laughter, and mouthwatering burgers on Friday. Strike out the stress and satisfy your hunger for fun!",
            },
        {
        id: 8,
            event: "🛹 Skate Club Skate Day! 🛹",
            text:
            "Skateboarding fanatics, unite! It's Skate Club Skate Day, filled with flips, tricks, and some surprise snacks. Shred it up and fuel your skating passion! Don't miss out on these exciting events. Mark your calendars and join the fun! 🥪🍔🛹",
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
    fontFamily: "cursive",
    
  },

  fullText: {
    fontSize: 16,
    fontFamily: "cursive",

  },
  seeMore: {
    color: "blue",
  },
});