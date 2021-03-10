import React, { useState } from "react";
import { ScrollView, StyleSheet, TextInput } from "react-native";

type Props = {
  markdown: string;
  editing?: boolean;
  onChangeText?: (text: string) => void;
  style?: any;
};

export default function MarkdownRender(props: Props) {
  return (
    <ScrollView style={props.style}>
      {props.editing && (
        <TextInput
          value={props.markdown}
          style={styles.markdownInput}
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
  },
});
