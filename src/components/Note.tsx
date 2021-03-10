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
import MarkdownRenderer from "./MarkdownEditor";
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

  // const onChangeTitle = useCallback(
  //   (text) => {
  //     setTitle(text);
  //     if (storedNote.title !== text) {
  //       dispatch(saveNote({ ...storedNote, title }));
  //     }
  //   },
  //   [dispatch, saveNote, content]
  // );

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
      <View style={styles.noteContainer}>
        <MarkdownRenderer
          markdown={content}
          style={styles.markdownLarge}
          editing={true}
          onChangeText={(text) => setContent(text)}
        />
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
        <Text>{title}</Text>
        <MarkdownRenderer markdown={content} style={styles.markdownSmall} />
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
