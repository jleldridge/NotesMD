import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import MarkdownRenderer from "./MarkdownRenderer";
import { Note as TNote } from "../types";
import { setCurrentNote } from "../redux/actions";

type Props = {
  editing: boolean;
  note: TNote;
};

export default function Note(props: Props) {
  const [content, setContent] = useState(props.note.content);
  const [name, setName] = useState(props.note.name);
  const [renderMarkdown, setRenderMarkdown] = useState(false);

  const dispatch = useDispatch();
  const onTouchNote = useCallback(() => {
    dispatch(setCurrentNote(props.note.name));
  }, [dispatch]);

  return props.editing ? (
    <View style={styles.editingContainer}>
      <TextInput
        style={styles.noteTitle}
        defaultValue={name}
        onChangeText={(text) => setName(text)}
      />
      <View style={styles.noteContainer}>
        {renderMarkdown ? (
          <MarkdownRenderer markdown={content} style={styles.markdownLarge} />
        ) : (
          <TextInput
            style={styles.markdownInput}
            placeholder="Type your markdown here!!"
            onChangeText={(text) => setContent(text)}
            defaultValue={content}
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
    <TouchableHighlight onPress={onTouchNote}>
      <View style={styles.notEditingContainer}>
        <Text>{props.note.name}</Text>
        <MarkdownRenderer
          markdown={props.note.content}
          style={styles.markdownSmall}
        />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  editingContainer: {
    backgroundColor: "#FFFB82",
    width: 420,
    height: 300,
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

  noteTitle: {
    width: 400,
    height: 200,
    padding: 10,
    fontSize: 24,
  },

  renderMarkdownSwitch: {
    alignSelf: "flex-end",
    marginRight: 10,
  },

  notEditingContainer: {
    backgroundColor: "#FFFB82",
    width: 210,
    height: 150,
  },
});
