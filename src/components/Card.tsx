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
import { RootState } from "../types";
import { setCurrentCard, saveCard } from "../redux/actions";

type Props = {
  cardId: string;
};

export default function Card(props: Props) {
  const storedCard = useSelector((state: RootState) =>
    state.cards.get(props.cardId)
  );
  if (!storedCard) return <Text>Error: No card found!</Text>;

  const editing = useSelector(
    (state: RootState) => state.currentCardId === props.cardId
  );

  const [content, setContent] = useState(storedCard.content || "");
  const [title, setTitle] = useState(storedCard.title || "");
  const dispatch = useDispatch();

  const onTouchCard = useCallback(() => {
    dispatch(setCurrentCard(props.cardId));
  }, [dispatch, props]);

  useEffect(() => {
    dispatch(saveCard({ ...storedCard, content, title }));
  }, [editing, title, content]);

  return editing ? (
    <View style={styles.editingContainer}>
      <TextInput
        style={styles.cardTitle}
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
    <TouchableHighlight onPress={onTouchCard}>
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

  cardTitle: {
    padding: 10,
    fontSize: 24,
    flex: 1,
  },

  renderMarkdownSwitch: {
    alignSelf: "flex-end",
    marginRight: 10,
  },
});
