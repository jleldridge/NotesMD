import React from "react";
import { connect } from "react-redux";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { addNote } from "../redux/actions";
import Note from "./Note";
import { RootState, Note as TNote } from "../types";

type Props = {
  notes?: TNote[];
};

export default function NotesList(props: Props) {
  return (
    <View>
      <FlatList
        data={props.notes}
        renderItem={({ item }) => (
          <View style={styles.note}>
            <Note editing={item.editing} content={item.content} />
          </View>
        )}
      />
      <Button onPress={onAddNote} title="Add Note" color="#841584" />
    </View>
  );
}

function onAddNote() {}

const styles = StyleSheet.create({
  note: {
    margin: 20,
  },
});
