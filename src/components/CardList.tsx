import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { addCard } from "../redux/actions";
import Card from "./Card";
import { RootState } from "../types";

export default function CardList() {
  const cards = useSelector((state: RootState) =>
    Array.from(state.cards, ([_, v]) => v.id)
  );

  const dispatch = useDispatch();
  const onAddCard = useCallback(() => {
    dispatch(addCard());
  }, [dispatch]);

  return (
    <View>
      <FlatList
        data={cards}
        renderItem={({ item }) => {
          return (
            <View style={styles.cardContainer}>
              <Card cardId={item} />
            </View>
          );
        }}
      />
      <Button onPress={onAddCard} title="Add Card" color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 20,
  },
});
