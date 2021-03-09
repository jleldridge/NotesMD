import { Note } from "../types";

export const addNote = () => ({
  type: "ADD_NOTE",
});

export const setCurrentNote = (id: string) => ({
  type: "SET_CURRENT_NOTE",
  id,
});

export const saveNote = (note: Note) => ({
  type: "SAVE_NOTE",
  note,
});
