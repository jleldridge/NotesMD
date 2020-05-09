import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import MarkdownRenderer from "./src/components/MarkdownRenderer";

export default function App() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 100 }}
        placeholder="Type your markdown here!"
        multiline={true}
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <MarkdownRenderer markdown={text} />
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
