import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  ViewStyle,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MarkdownEditor from "./MarkdownEditor";
import { Note as TNote, RootState } from "../types";
import { setCurrentNote, saveNote } from "../redux/actions";

type Props = {
  noteId: string;
};

export default function Note(props: Props) {
  const storedNote = useSelector((state: RootState) =>
    state.notes.get(props.noteId)
  );
  if (!storedNote) return <Text>Error: No note found!</Text>;

  const editing = useSelector(
    (state: RootState) => state.currentNoteId === props.noteId
  );

  const [content, setContent] = useState(storedNote.content || "");
  const [title, setTitle] = useState(storedNote.title || "");
  const [renderMarkdown, setRenderMarkdown] = useState(false);
  const dispatch = useDispatch();

  const onTouchNote = useCallback(() => {
    dispatch(setCurrentNote(props.noteId));
  }, [dispatch, props]);

  useEffect(() => {
    dispatch(saveNote({ ...storedNote, content, title }));
  }, [editing, title, content]);

  return editing ? (
    <View style={styles.editingContainer}>
      <TextInput
        style={styles.noteTitle}
        defaultValue={title}
        onChangeText={(text) => setTitle(text)}
      />
      <MarkdownEditor
        markdown={content}
        style={styles.markdownLarge}
        editing={true}
        onChangeText={(text) => setContent(text)}
      />
    </View>
  ) : (
    <TouchableHighlight onPress={onTouchNote}>
      <View style={styles.notEditingContainer}>
        <Text>{title}</Text>
        {/* <MarkdownEditor markdown={content} style={styles.markdownSmall} /> */}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  editingContainer: {
    backgroundColor: "#FFFB82",
  },

  notEditingContainer: {
    backgroundColor: "#FFFB82",
  },

  markdownLarge: {
    flex: 3,
    margin: 5,
    backgroundColor: "#FFFFFF",
    minHeight: 300,
  },

  markdownSmall: {
    margin: 5,
    flex: 3,
  },

  noteTitle: {
    padding: 10,
    fontSize: 24,
    flex: 1,
  },

  renderMarkdownSwitch: {
    alignSelf: "flex-end",
    marginRight: 10,
  },
});
