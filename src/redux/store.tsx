import { createStore } from "redux";
import { RootState } from "../types";
import { v4 as uuid } from "uuid";

const EMPTY_STATE = {
  notes: {},
  editingNoteId: "",
};

function reduce(state: RootState = EMPTY_STATE, action: any) {
  switch (action.type) {
    case "ADD_NOTE":
      let notes = { ...state.notes };
      let id = uuid();
      notes[id] = {
        content: "",
        name: "",
        id,
        createdAt: Date.now().toString(),
      };
      return { ...state, notes, editingNoteId: id };
    case "SET_EDITING_NOTE":
      return { ...state, editingNoteId: action.id };
    default:
      return state;
  }
}

let store = createStore(reduce);
export default store;
