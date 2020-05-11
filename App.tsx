import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, View } from "react-native";
import NotesList from "./src/components/NotesList";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NotesList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  note: {
    margin: 20,
  },
});
