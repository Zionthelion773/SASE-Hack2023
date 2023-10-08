import React, { useState, useRef } from 'react';
import { View, Button, Modal, Text, StyleSheet, Image, Animated } from 'react-native';

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
            <Button title="New Food" onPress={() => setNewFoodModalVisible(true)} style={styles.buttonWithBorder} />
            <Button title="Exp Soon" onPress={() => setExpSoonModalVisible(true)} style={styles.buttonWithBorder} />
            <Button title="Type" onPress={() => setTypeModalVisible(true)} style={styles.buttonWithBorder} />
            <Button title="Quantity" onPress={() => setQuantityModalVisible(true)} style={styles.buttonWithBorder} />

            {/* Exp Soon Modal */}
            <Modal visible={expSoonModalVisible} transparent={true} animationType="slide">
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>There are 12 items that expire soon.</Text>
                    <Button title="Close" onPress={() => setExpSoonModalVisible(false)} />
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
                </View>
            </Modal>

                {/* Type Modal */}
            <Modal visible={typeModalVisible} transparent={true} animationType="slide">
                <View style={styles.modalView}>
                    <Animated.Image 
                        style={[styles.cornerImageTopLeft, { transform: [{ rotate: pizzaRotation }] }]}
                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsAfLVTId5z4xvTpP12Gi-kHvXk_uC1q1RQ&usqp=CAU'}}
                    />
                    {/* ... other images remain unchanged */}
                    
                    <Text style={styles.modalText}>Choose the type of food you want to look for!</Text>
                    <Button title="Pizza Spin!" onPress={handlePizzaAnimation} />
                    <Button title="Close" onPress={() => setTypeModalVisible(false)} />
                </View>
            </Modal>

            {/* NewFood Modal */}
            <Modal visible={newfoodModalVisible} transparent={true} animationType="slide">
                <View style={styles.modalView}>
                    <Text style={styles.headerText}>These are the newest food entries: </Text>
                    <Text>1. Chicken Sammy</Text>
                    
                    <Text>2. Pizza</Text>
                    <Text>3. French fries</Text>
                    <Button title="Close" onPress={() => setNewFoodModalVisible(false)} />
                </View>
            </Modal>
            
            {/* Quantity Modal */}
            <Modal visible={quantityModalVisible} transparent={true} animationType="slide">
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>This is where quantity-related content will appear.</Text>
                    <Button title="Close" onPress={() => setQuantityModalVisible(false)} />
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
    }
});
