import { createStore } from "redux";
import { RootState } from "../types";
import getUniqueName from "../utilities/UniqueNameResolver";

const EMPTY_STATE = {
  notes: {},
  currentNote: "",
};

function reduce(state: RootState = EMPTY_STATE, action: any) {
  switch (action.type) {
    case "ADD_NOTE":
      let notes = { ...state.notes };
      const name = getUniqueName(state);
      notes[name] = {
        content: "",
        name,
        createdAt: Date.now().toString(),
      };
      return { ...state, notes, currentNote: name };
    case "SET_CURRENT_NOTE":
      return { ...state, currentNote: action.name };
    default:
      return state;
  }
}

let store = createStore(reduce);
export default store;
