import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { addNote } from "../redux/actions";
import Note from "./Note";
import { RootState, Note as TNote } from "../types";

export default function NotesList() {
  const notes = useSelector((state: RootState) =>
    Array.from(state.notes, ([_, v]) => v.id)
  );

  const dispatch = useDispatch();
  const onAddNote = useCallback(() => {
    dispatch(addNote());
  }, [dispatch]);

  return (
    <View>
      <FlatList
        data={notes}
        renderItem={({ item }) => {
          return (
            <View style={styles.noteContainer}>
              <Note noteId={item} />
            </View>
          );
        }}
      />
      <Button onPress={onAddNote} title="Add Note" color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  noteContainer: {
    margin: 20,
  },
});
