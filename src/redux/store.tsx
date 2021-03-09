import { createStore } from "redux";
import { RootState } from "../types";
import { Note } from "../types";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const EMPTY_STATE = {
  notes: new Map<string, Note>(),
};

function reduce(state: RootState = EMPTY_STATE, action: any) {
  switch (action.type) {
    case "ADD_NOTE":
      return addNote(state);
    case "SET_CURRENT_NOTE":
      return { ...state, currentNote: action.id };
    case "SAVE_NOTE":
      return saveNote(state, action.note);
    default:
      return state;
  }
}

function addNote(state: RootState): RootState {
  let { notes } = state;
  const title = "New Note";
  const uuid = uuidv4();
  const note = {
    id: uuid,
    title,
    content: "",
    createdAt: Date.now().toString(),
  };
  notes.set(uuid, note);

  return { ...state, notes, currentNote: note };
}

function saveNote(state: RootState, note: Note): RootState {
  let { notes } = state;
  notes.set(note.id, note);
  return { ...state, notes };
}

let store = createStore(reduce);
export default store;
