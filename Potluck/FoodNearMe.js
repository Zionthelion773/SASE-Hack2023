import React, { useState, useRef, useEffect } from 'react';
import { View, Button, Modal, Text, StyleSheet, Image, Animated, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function ExpiringSoonModal({ isVisible, onClose }) {
  const [items, setItems] = useState([
    { name: "Chicken nuggets", duration: 12 * 3600 },
    { name: "Eggs", duration: 1 * 3600 },
    { name: "Milk", duration: 20 * 3600 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prevItems => {
        return prevItems.map(item => {
          if (item.duration > 0) {
            return { ...item, duration: item.duration - 1 };
          }
          return item;
        });
      });
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View style={styles.modalView}>
        <Ionicons name="alarm-outline" size={70} color="orange" style={styles.modalIcon} />
        <Text style={styles.modalTitle}>Expiring Soon</Text>
        <Text style={styles.modalSubheader}>Urgent Attention Needed!</Text>
        {items.map((item, index) => (
          <View key={index} style={styles.modalContentRow}>
            <Text style={styles.modalContentText}>
              {item.name} - Expires in {Math.floor(item.duration / 3600)} hours 
              {Math.floor((item.duration % 3600) / 60)} minutes
            </Text>
          </View>
        ))}
        <TouchableOpacity style={styles.modalButton} onPress={onClose}>
            <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
export default function FoodNearMe({ navigation }) {
    const [expSoonModalVisible, setExpSoonModalVisible] = useState(false);
    const [typeModalVisible, setTypeModalVisible] = useState(false);
    const [quantityModalVisible, setQuantityModalVisible] = useState(false);
    const [newfoodModalVisible, setNewFoodModalVisible] = useState(false);

    const rotateValue = useRef(new Animated.Value(0)).current;

    const pizzaRotation = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    const handlePizzaAnimation = () => {
        Animated.timing(rotateValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            rotateValue.setValue(0);
        });
    };

    return (
        <View style={styles.container}>


            {/* Grid for options */}
            <View style={styles.grid}>
                
                <TouchableOpacity style={styles.card} onPress={() => setNewFoodModalVisible(true)}>
                    <Ionicons name="fast-food" size={50} color="tomato" />
                    <Text>New Food</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={() => setExpSoonModalVisible(true)}>
                    <Ionicons name="alarm-outline" size={50} color="orange" />
                    <Text>Exp Soon</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={() => setTypeModalVisible(true)}>
                    <Ionicons name="pizza-outline" size={50} color="goldenrod" />
                    <Text>Type of Food </Text>
                </TouchableOpacity>
                

                <TouchableOpacity style={styles.card} onPress={() => setQuantityModalVisible(true)}>
                    <Ionicons name="bar-chart-outline" size={50} color="green" />
                    <Text>Quantity</Text>
                </TouchableOpacity>
                
            </View>

           {/* Exp Soon Modal */}
           <Modal visible={expSoonModalVisible} transparent={true} animationType="slide">
                <View style={styles.modalView}>
                    <Ionicons name="alarm-outline" size={70} color="orange" style={styles.modalIcon} />
                    <Text style={styles.modalTitle}>Expiring Soon</Text>
                    <Text style={styles.modalSubheader}>Urgent Attention Needed!</Text>
                    <Text style={styles.modalContentText}>1. Chicken nuggets - Expires in 12 hours.</Text>
                    <Text style={styles.modalContentText}>2. Eggs - Expires in 15 hours.</Text>
                    <Text style={styles.modalContentText}>3. Milk - Expires in 20 hours.</Text>
                    <TouchableOpacity style={styles.modalButton} onPress={() => setExpSoonModalVisible(false)}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            
             {/* Type Modal */}
             <Modal visible={typeModalVisible} transparent={true} animationType="slide">
                <View style={styles.modalView}>
                    <Animated.Image 
                        style={[styles.cornerImageTopLeft, { transform: [{ rotate: pizzaRotation }] }]}
                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsAfLVTId5z4xvTpP12Gi-kHvXk_uC1q1RQ&usqp=CAU'}}
                    />
                    {/* The rest of the images remain static (unchanged) */}
                    <Image style={styles.cornerImageTopRight} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgmJKX3f7dmymbhX1mF_hlDUPUtdhqjdffg&usqp=CAU'}} />
                    <Image style={styles.cornerImageBottomLeft} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKoVIAFyyK0--IqEIMKv0bVfvG4Ao2u1sbw&usqp=CAU'}} />
                    <Image style={styles.cornerImageBottomRight} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROMRcAXr_rTrjZ9mzm-_P23kaYn69fytk6Yw&usqp=CAU'}} />

                    <Text style={styles.modalText}>Choose the type of food you want to look for!</Text>
                    <Button title="Pizza Spin!" onPress={handlePizzaAnimation} />
                    <Button title="Close" onPress={() => setTypeModalVisible(false)} />
                    <Ionicons name="pizza-outline" size={70} color="goldenrod" style={styles.modalIcon} />
                
                </View>
            </Modal>


            
            {/* New Food Modal */}
            <Modal visible={newfoodModalVisible} transparent={true} animationType="slide">
                <View style={styles.modalView}>
                    <Ionicons name="fast-food" size={70} color="tomato" style={styles.modalIcon} />
                    <Text style={styles.modalTitle}>Newest Food Entries</Text>
                    <Text style={styles.modalSubheader}>Latest Additions</Text>
                    <Text style={styles.modalContentText}>1. Chicken Sammy - Freshly added today.</Text>
                    <Text style={styles.modalContentText}>2. Pizza - Hot and spicy variant, added yesterday.</Text>
                    <Text style={styles.modalContentText}>3. French fries - Crispy delights, added 2 days ago.</Text>
                    <TouchableOpacity style={styles.modalButton} onPress={() => setNewFoodModalVisible(false)}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            
              {/* Quantity Modal */}
            <Modal visible={quantityModalVisible} transparent={true} animationType="slide">
                <View style={styles.modalView}>
                    <Ionicons name="bar-chart-outline" size={70} color="green" style={styles.modalIcon} />
                    <Text style={styles.modalTitle}>Quantity Available</Text>
                    <Text style={styles.modalSubheader}>Current Stock</Text>
                    <View style={styles.modalContentRow}>
                        <Text style={styles.modalContentText}>1. 3 bags of flour</Text>
                        <TouchableOpacity style={styles.addMoreButton}>
                            <Text>Add More</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.modalContentRow}>
                        <Text style={styles.modalContentText}>2. 5 cartons of eggs</Text>
                        <TouchableOpacity style={styles.addMoreButton}>
                            <Text>Add More</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.modalContentRow}>
                        <Text style={styles.modalContentText}>3. 24 packs of beef jerky</Text>
                        <TouchableOpacity style={styles.addMoreButton}>
                            <Text>Add More</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.modalButton} onPress={() => setQuantityModalVisible(false)}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9'  // A soft background color
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 20,
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        margin: 10,
        width: '45%',
        elevation: 5  // Gives a shadow effect
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonWithBorder: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        margin: 5,
        padding: 5
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        position: 'relative'
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    cornerImageTopLeft: {
        width: 150,
        height: 200,
        position: 'absolute',
        top: 10,
        left: 10
    },
    cornerImageTopRight: {
        width: 150,
        height: 200,
        position: 'absolute',
        top: 10,
        right: 10
    },
    cornerImageBottomLeft: {
        width: 150,
        height: 200,
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    cornerImageBottomRight: {
        width: 150,
        height: 200,
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    modalIcon: {
        marginBottom: 20
    },
    modalButton: {
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
        width: '60%'
    },
    modalIcon: {
        marginBottom: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center'
    },
    modalSubheader: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        color: '#666'
    },
    modalContentText: {
        fontSize: 16,
        marginBottom: 8
    },
    modalButton: {
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
        width: '60%'
    },
    modalContentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    addMoreButton: {
        backgroundColor: '#FFD700', // Gold Color for a fancy touch
        padding: 8,
        borderRadius: 5,
        borderColor: '#DAA520', // Goldenrod border
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
    
});
