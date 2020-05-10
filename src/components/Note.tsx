import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import MarkdownRenderer from "./MarkdownRenderer";
import ToggleSwitch from "./ToggleSwitch";

export default function Note() {
  const [text, setText] = useState("");
  const [renderMarkdown, setRenderMarkdown] = useState(false);

  return (
    <View style={styles.noteContainer}>
      <View>
        {renderMarkdown ? (
          <MarkdownRenderer markdown={text} width={400} height={200} />
        ) : (
          <TextInput
            style={{ width: 400, height: 200, padding: 10 }}
            placeholder="Type your markdown here!!"
            onChangeText={(text) => setText(text)}
            defaultValue={text}
            multiline={true}
          />
        )}
      </View>
      <ToggleSwitch
        on={renderMarkdown}
        changed={() => {
          setRenderMarkdown(!renderMarkdown);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  noteContainer: {
    backgroundColor: "#FFFB82",
    alignItems: "center",
    justifyContent: "center",
    width: 420,
    height: 230,
  },
});
