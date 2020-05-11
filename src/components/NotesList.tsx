import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { addNote } from "../redux/actions";
import Note from "./Note";
import { RootState, Note as TNote } from "../types";

export default function NotesList() {
  const notes = useSelector((state: RootState) => state.notes);
  const currentNote = useSelector((state: RootState) => state.currentNote);

  const dispatch = useDispatch();
  const onAddNote = useCallback(() => {
    dispatch(addNote());
  }, [dispatch]);

  console.log(notes, currentNote);

  return (
    <View>
      <FlatList
        data={Object.values(notes)}
        renderItem={({ item }) => (
          <View style={styles.note}>
            <Note editing={item.name === currentNote} note={item} />
          </View>
        )}
      />
      <Button onPress={onAddNote} title="Add Note" color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  note: {
    margin: 20,
  },
});
