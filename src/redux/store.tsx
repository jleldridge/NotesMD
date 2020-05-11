import { createStore } from "redux";
import { RootState } from "../types";

const EMPTY_STATE = {
  notes: [],
};

function reduce(state: RootState = EMPTY_STATE, action: any) {
  switch (action.type) {
    case "ADD_NOTE":
      let notes = [...state.notes];
      notes.push({ editing: action.editing, content: action.content });
      return { ...state, notes };
    default:
      return state;
  }
}

let store = createStore(reduce);
export default store;
