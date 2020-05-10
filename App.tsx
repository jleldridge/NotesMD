import React from "react";
import { StyleSheet, View } from "react-native";
import Note from "./src/components/Note";

export default function App() {
  return (
    <View style={styles.container}>
      <Note editing={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
