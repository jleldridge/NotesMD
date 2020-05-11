import React, { useState } from "react";
import { StyleSheet, Switch, TextInput, View } from "react-native";
import MarkdownRenderer from "./MarkdownRenderer";

type Props = {
  editing: boolean;
  content: string;
};

export default function Note(props: Props) {
  const [text, setText] = useState(props.content);
  const [renderMarkdown, setRenderMarkdown] = useState(false);

  return props.editing ? (
    <View style={styles.editingContainer}>
      <View style={styles.noteContainer}>
        {renderMarkdown ? (
          <MarkdownRenderer markdown={text} style={styles.markdownLarge} />
        ) : (
          <TextInput
            style={styles.markdownInput}
            placeholder="Type your markdown here!!"
            onChangeText={(text) => setText(text)}
            defaultValue={text}
            multiline={true}
          />
        )}
      </View>
      <Switch
        value={renderMarkdown}
        style={styles.renderMarkdownSwitch}
        onValueChange={() => setRenderMarkdown(!renderMarkdown)}
      />
    </View>
  ) : (
    <View style={styles.notEditingContainer}>
      <MarkdownRenderer markdown={text} style={styles.markdownSmall} />
    </View>
  );
}

const styles = StyleSheet.create({
  editingContainer: {
    backgroundColor: "#FFFB82",
    width: 420,
    height: 255,
  },

  markdownLarge: {
    width: 400,
    height: 200,
  },

  markdownSmall: {
    width: 200,
    height: 100,
  },

  noteContainer: {
    margin: 10,
  },

  markdownInput: {
    width: 400,
    height: 200,
    padding: 10,
  },

  renderMarkdownSwitch: {
    alignSelf: "flex-end",
    marginRight: 10,
  },

  notEditingContainer: {
    backgroundColor: "#FFFB82",
    width: 210,
    height: 127.5,
  },
});
