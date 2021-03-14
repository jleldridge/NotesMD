import { Card } from "../types";

export const addCard = () => ({
  type: "ADD_CARD",
});

export const setCurrentCard = (id: string) => ({
  type: "SET_CURRENT_CARD",
  id,
});

export const saveCard = (card: Card) => ({
  type: "SAVE_CARD",
  card,
});
