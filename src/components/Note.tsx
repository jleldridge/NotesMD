import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MarkdownRenderer from "./MarkdownRenderer";
import { Note as TNote, RootState } from "../types";
import { setCurrentNote, saveNoteContent, renameNote } from "../redux/actions";

type Props = {
  noteIndex: number;
};

export default function Note(props: Props) {
  console.log("rerendering ", props.noteIndex);
  const storedNoteName = useSelector(
    (state: RootState) => state.notes[props.noteIndex].name
  );
  console.log(storedNoteName);
  const storedNoteContent = useSelector(
    (state: RootState) => state.notes[props.noteIndex].content
  );
  const editing = useSelector(
    (state: RootState) => state.currentNote === storedNoteName
  );

  const [content, setContent] = useState(storedNoteContent);
  const [name, setName] = useState(storedNoteName);
  const [renderMarkdown, setRenderMarkdown] = useState(false);

  const dispatch = useDispatch();
  const onTouchNote = useCallback(() => {
    console.log("touched note", storedNoteName);
    dispatch(setCurrentNote(storedNoteName));
  }, [dispatch, storedNoteName]);

  const onChangeName = useCallback(
    (text) => {
      setName(text);
      if (storedNoteName !== text) {
        dispatch(renameNote(storedNoteName, text));
      }
    },
    [dispatch, setName, storedNoteName]
  );

  useEffect(() => {
    dispatch(saveNoteContent(storedNoteName, content));
  }, [editing, content]);

  return editing ? (
    <View style={styles.editingContainer}>
      <TextInput
        style={styles.noteTitle}
        defaultValue={name}
        onChangeText={onChangeName}
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
        <Text>{storedNoteName}</Text>
        <MarkdownRenderer
          markdown={storedNoteContent}
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
