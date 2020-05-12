import { createStore } from "redux";
import { RootState } from "../types";
import getUniqueName from "../utilities/UniqueNameResolver";
import { Note } from "../types";

const EMPTY_STATE = {
  notes: [],
  notesMap: {},
  currentNote: "",
};

function reduce(state: RootState = EMPTY_STATE, action: any) {
  switch (action.type) {
    case "ADD_NOTE":
      return addNote(state);
    case "SET_CURRENT_NOTE":
      return { ...state, currentNote: action.name };
    case "SAVE_NOTE_CONTENT":
      return saveNoteContent(state, action.name, action.content);
    case "RENAME_NOTE":
      return renameNote(state, action.oldName, action.newName);
    default:
      return state;
  }
}

function addNote(state: RootState): RootState {
  let notes = [...state.notes];
  let notesMap = state.notesMap;
  const name = getUniqueName(state);
  notes.push({
    content: "",
    name,
    createdAt: Date.now().toString(),
  });
  notesMap[name] = notes.length - 1;
  return { ...state, notes, notesMap, currentNote: name };
}

function saveNoteContent(
  state: RootState,
  name: string,
  content: string
): RootState {
  let { notes, notesMap } = state;
  notes[notesMap[name]].content = content;
  return { ...state, notes };
}

function renameNote(
  state: RootState,
  oldName: string,
  newName: string
): RootState {
  if (oldName === newName) {
    return { ...state };
  }

  // let { notes, notesMap } = state;
  let notes = [...state.notes];
  let notesMap = { ...state.notesMap };
  let note = notes[notesMap[oldName]];
  let currentNote = oldName;

  // check if the new name is unique and valid
  if (newName && newName !== "" && !notesMap[newName]) {
    notesMap[newName] = notesMap[oldName];
    note.name = newName;
    delete notesMap[oldName];
    console.log("changed from", oldName, "to", newName);
    console.log(notes);
    currentNote = newName;
  }
  // if newName is not unique and valid, don't change the stored name of the note.
  // the ui should show a validation error of some sort, and we should snap back
  // to the old name if we quit editing in this state.
  return { ...state, notes, notesMap, currentNote };
}

let store = createStore(reduce);
export default store;
