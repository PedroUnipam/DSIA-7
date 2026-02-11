import React from "react";
import { View, Text, StyleSheet } from "react-native";
import OlaMundo from "./components/OlaMundo";

export default function App() {
  return (
    <View style={styles.container}>
      <OlaMundo nome='Shahar Shushan'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    fontSize:24,
    fontWeight:"bold",
  },
});