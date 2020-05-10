import React, { useState } from "react";
import { StyleSheet, Switch, TextInput, View } from "react-native";
import MarkdownRenderer from "./MarkdownRenderer";

type Props = {
  editing: boolean;
};

export default function Note(props: Props) {
  const [text, setText] = useState("");
  const [renderMarkdown, setRenderMarkdown] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.noteContainer}>
        {renderMarkdown || !props.editing ? (
          <MarkdownRenderer markdown={text} width={400} height={200} />
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
      {props.editing && (
        <Switch
          value={renderMarkdown}
          style={styles.renderMarkdownSwitch}
          onValueChange={() => setRenderMarkdown(!renderMarkdown)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFB82",
    width: 420,
    height: 255,
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
});
