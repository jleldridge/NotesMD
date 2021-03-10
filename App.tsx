import React from "react";
import { Provider } from "react-redux";
import { SafeAreaView, StyleSheet, View } from "react-native";
import NotesList from "./src/components/NotesList";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NotesList />
      </SafeAreaView>
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
});
