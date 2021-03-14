import React, { useCallback, useRef, RefObject } from "react";
import { TouchableHighlight, StyleSheet, TextInput } from "react-native";

type Props = {
  markdown: string;
  editing?: boolean;
  onChangeText?: (text: string) => void;
  style?: any;
};

export default function MarkdownEditor(props: Props) {
  const inputElement: RefObject<TextInput> = useRef<TextInput>(null);

  const onTouchEditor = () => {
    inputElement?.current?.focus();
  };

  return (
    <TouchableHighlight onPress={onTouchEditor} style={props.style}>
      {props.editing && (
        <TextInput
          ref={inputElement}
          value={props.markdown}
          style={styles.markdownInput}
          onChangeText={props.onChangeText}
          multiline={true}
        />
      )}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  markdownInput: {
    backgroundColor: "#fff",
    margin: 5,
  },
});
