import React, { useState } from "react";
import { View, Text, Pressable, Modal, TextInput, Button } from "react-native";
import { AppStyles } from "./styles.js";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

//components
import DirCard from "./components/dir-list.js";


const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [repoUrl, setRepoUrl] = useState("");
  const [repoList, setRepoList] = useState([{ name: 'demo' }, { name: 'demo2' }]);

  const handleAddRepo = () => {
    setIsModalVisible(true);
  };

  const handleDownload = async () => {
    // Simulate updating the UI (remove if implementing real download)
    setIsModalVisible(false);
  
    // Send the GitHub URL to the server-side component (replace with actual API call)
    const response = await fetch('http://localhost:4001/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: repoUrl }),
    });
  
    if (!response.ok) {
      const data = await response.json();
      console.error('Download failed:', data.message);
  
      if (data.message === 'Repository already exists. Choose a different one.') {
        // Inform the user about the duplicate repository error
        alert('Download failed. Repository already exists. Please choose a different one.');
      }
  
      return;
    }
  
    // Handle potential response from the server (e.g., success message)
    const data = await response.json();
    console.log('Server response:', data);
    setRepoList([...repoList, { name: repoUrl.split('/').pop().split('.')[0] }]);
  };

  const handleDelete = () => {
    // Logic to delete repo from repo list
  };

  return (
    <View style={AppStyles.rootDiv}>
      <LinearGradient colors={['#28282B', '#28282B']} style={AppStyles.linearGradient}>
        <Text style={AppStyles.buttonText}>Git Assignment</Text>
        <View style={AppStyles.innerContainer}>
          <View style={AppStyles.button}>
            <Pressable onPress={handleAddRepo}>
              <Text style={AppStyles.text}>Add Repo</Text>
            </Pressable>
          </View>
          <LinearGradient colors={['#28282B']} style={AppStyles.menuGradient}>
            <View style={AppStyles.menu}>
              {repoList.map((repo, index) => (
                <DirCard key={index} name={repo.name} onDelete={handleDelete} />
              ))}
            </View>
          </LinearGradient>
          <Modal visible={isModalVisible} animationType="slide" transparent>
            <View style={AppStyles.modalContainer}>
              <View style={AppStyles.modalContent}>
                <Text style={AppStyles.modalText}>Enter GitHub Repo URL:</Text>
                <TextInput
                  style={AppStyles.input}
                  placeholder="Repo URL"
                  value={repoUrl}
                  onChangeText={(text) => setRepoUrl(text)}
                />
                <Pressable onPress={handleDownload}>
                  <Text style={AppStyles.modalButton}>Download</Text>
                </Pressable>
                <Pressable onPress={() => setIsModalVisible(false)}>
                  <Text style={AppStyles.modalButton}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </LinearGradient>
      <StatusBar />
    </View>
  );
};

export default App;
