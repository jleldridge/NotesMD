import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

export default function App() {
  const [text, setText] = useState("");

  let result = md.render(text);

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 100 }}
        placeholder="Type your markdown here!"
        multiline={true}
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <div
        style={{ padding: 10, fontSize: 42 }}
        dangerouslySetInnerHTML={{ __html: result }}
      />
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
