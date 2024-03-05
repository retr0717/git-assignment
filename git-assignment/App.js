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

  const handleDownload = () => {
    // Logic to download repo and update repo list
    setRepoList([...repoList, { name: repoUrl }]);
    setIsModalVisible(false);
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
