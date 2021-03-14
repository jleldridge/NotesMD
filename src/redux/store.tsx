import { createStore } from "redux";
import { RootState } from "../types";
import { Card } from "../types";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const EMPTY_STATE = {
  cards: new Map<string, Card>(),
};

function reduce(state: RootState = EMPTY_STATE, action: any) {
  switch (action.type) {
    case "ADD_CARD":
      return addCard(state);
    case "SET_CURRENT_CARD":
      return { ...state, currentCardId: action.id };
    case "SAVE_CARD":
      return saveCard(state, action.card);
    default:
      return state;
  }
}

function addCard(state: RootState): RootState {
  let { cards } = state;
  const title = "New Card";
  const uuid = uuidv4();
  const card = {
    id: uuid,
    title,
    content: "",
    createdAt: Date.now().toString(),
  };
  cards.set(uuid, card);

  return { ...state, cards, currentCardId: card.id };
}

function saveCard(state: RootState, card: Card): RootState {
  let { cards } = state;
  cards.set(card.id, card);
  return { ...state, cards };
}

let store = createStore(reduce);
export default store;
