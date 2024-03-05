import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you have installed this icon library

const DirCard = ({ name, onDelete }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleDelete = () => {
        setIsModalVisible(false); // Close the modal after confirmation
        onDelete(); // Call the provided onDelete function for handling deletion logic
    };

    const handleModalClose = () => {
        setIsModalVisible(false); // Close the modal on cancel
    };

    return (
        <View style={styles.cardContainer}>
            <LinearGradient colors={['#28282B']} style={styles.card}>
                <View style={styles.iconContainer}>
                    {/* Assuming you have an icon image source named 'folder.png' */}
                    <Image source={require('../assets/icon.png')} style={styles.icon} />
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameText}>{name}</Text>
                </View>
                <TouchableOpacity style={styles.dotsContainer} onPress={() => setIsModalVisible(true)}>
                    <MaterialIcons name="more-vert" size={24} color="#fff" />
                </TouchableOpacity>
            </LinearGradient>

            <Modal visible={isModalVisible} animationType="fade" onRequestClose={handleModalClose}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalText}>Are you sure you want to delete "{name}"?</Text>
                    <View style={styles.modalButtons}>
                        <TouchableOpacity style={styles.cancelButton} onPress={handleModalClose}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                            <Text style={styles.deleteText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: '95%', // Ensures full width
        marginBottom: 10,
        backgroundColor:'black',
        borderRadius:10,
        marginTop:3,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
    },
    iconContainer: {
        marginRight: 15,
    },
    icon: {
        width: 30,
        height: 30,
    },
    nameContainer: {
        flex: 1, // Takes up remaining space
    },
    nameText: {
        color: '#fff',
        fontSize: 16,
    },
    dotsContainer: {
    },
    modalContainer: {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        width:200,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 15,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    cancelButton: {
        padding: 10,
        backgroundColor: '#ccc',
        borderRadius: 5,
    },
    cancelText: {
        color: '#333',
    },
    deleteButton: {
        padding: 10,
        backgroundColor: '#f00',
        borderRadius: 5,
    },
    deleteText: {
        color: '#fff',
    },
});

export default DirCard;
