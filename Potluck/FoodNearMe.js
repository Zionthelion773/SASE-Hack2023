import React, { useState } from 'react';
import { View, Button, Modal, Text, StyleSheet, Image } from 'react-native';

export default function FoodNearMe({ navigation }) {
    const [expSoonModalVisible, setExpSoonModalVisible] = useState(false);
    const [typeModalVisible, setTypeModalVisible] = useState(false);
    const [quantityModalVisible, setQuantityModalVisible] = useState(false);
    const [newfoodModalVisible, setNewFoodModalVisible]= useState(false);

    return (
        <View style={styles.container}>
            <Button title="New Food" onPress={() => setNewFoodModalVisible(true)} />
            <Button title="Exp Soon" onPress={() => setExpSoonModalVisible(true)} />
            <Button title="Type" onPress={() => setTypeModalVisible(true)} />
            <Button title="Quantity" onPress={() => setQuantityModalVisible(true)} />

            {/* Exp Soon Modal */}
            <Modal visible={expSoonModalVisible} transparent={true} animationType="slide">
                <View style={styles.modalView}>
                    <Text>There are 12 items that expire soon.</Text>
                    <Button title="Close" onPress={() => setExpSoonModalVisible(false)} />
                </View>
            </Modal>
            {/* Type Modal */}
            <Modal visible={typeModalVisible} transparent={true} animationType="slide">
                <View style={styles.modalView}>
                    <Image style={styles.cornerImageTopLeft} source={{uri: 'https://via.placeholder.com/50'}} />
                    <Image style={styles.cornerImageTopRight} source={{uri: 'https://via.placeholder.com/50'}} />
                    <Image style={styles.cornerImageBottomLeft} source={{uri: 'https://via.placeholder.com/50'}} />
                    <Image style={styles.cornerImageBottomRight} source={{uri: 'https://via.placeholder.com/50'}} />

                    <Text>Choose the type of food you want to look for!</Text>
                    
                    <Button title="Close" onPress={() => setTypeModalVisible(false)} />
                </View>
            </Modal>

            {/* NewFood Modal */}
            <Modal visible={newfoodModalVisible} transparent={true} animationType="slide">
                <View style={styles.modalView}>
                    <Text>These are the newest food entries: </Text>
                    <Button title="Close" onPress={() => setNewFoodModalVisible(false)} />
                </View>
            </Modal>
            
            {/* Quantity Modal */}
            <Modal visible={quantityModalVisible} transparent={true} animationType="slide">
                <View style={styles.modalView}>
                    <Text> thissssss</Text>
                    {/* Implement any functionality/content for this modal here */}
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
    cornerImageTopLeft: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 10,
        left: 10
    },
    cornerImageTopRight: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 10,
        right: 10
    },
    cornerImageBottomLeft: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    cornerImageBottomRight: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 10,
        right: 10
    }
});
