import React, { useState } from "react";
import { View, Text, Pressable} from "react-native";
import { AppStyles } from "./styles.js";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import DirCard from "./components/dir-list.js";

const App = () => {

  const list = [{name:'demo'}, {name:'demo2'}];

  const handleDelete = () => {

  }

  return (
    <View style={AppStyles.rootDiv}>
      <LinearGradient colors={['#28282B','#28282B']} style={AppStyles.linearGradient}>
      <Text style={AppStyles.buttonText}>Git Assignment</Text>
        <View style={AppStyles.innerContainer}>
          <View style={AppStyles.button}>
            <Pressable>
              <Text style={AppStyles.text}>Add Repo</Text>
            </Pressable>
          </View>
          <LinearGradient colors={['#28282B']}  style={AppStyles.menuGradient} >
          <View style={AppStyles.menu}>
            <DirCard name={"demo"} onDelete={handleDelete}/>
            <DirCard name={"demo"} onDelete={handleDelete}/>
            <DirCard name={"demo"} onDelete={handleDelete}/>
          </View> 
          </LinearGradient>
        </View>
      </LinearGradient>
      <StatusBar />
    </View> 
  );
};

export default App;
