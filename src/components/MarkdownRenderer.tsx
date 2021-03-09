import React, { useState } from "react";
import { ScrollView, StyleSheet, TextInput } from "react-native";
import Markdown from "react-native-easy-markdown";

type Props = {
  markdown: string;
  editing?: boolean;
  onChangeText?: (text: string) => void;
  style?: any;
};

export default function MarkdownRender(props: Props) {
  const [selection, setSelection] = useState({ start: 0, end: 0 });

  let editableMarkdown =
    (selection.start === 0
      ? ""
      : props.markdown.substring(0, selection.start)) +
    "|" +
    props.markdown.substring(selection.start, props.markdown.length);
  return (
    <ScrollView style={props.style}>
      <Markdown>{editableMarkdown}</Markdown>
      {props.editing && (
        <TextInput
          value={props.markdown}
          style={styles.markdownInput}
          onSelectionChange={({ nativeEvent: { selection } }) => {
            setSelection(selection);
          }}
          onChangeText={props.onChangeText}
          multiline={true}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  markdownInput: {
    position: "absolute",
    opacity: 0,
  },
});
