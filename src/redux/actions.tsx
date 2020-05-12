import { Note } from "../types";

export const addNote = () => ({
  type: "ADD_NOTE",
});

export const setCurrentNote = (name: string) => ({
  type: "SET_CURRENT_NOTE",
  name,
});

export const saveNoteContent = (name: string, content: string) => ({
  type: "SAVE_NOTE_CONTENT",
  name,
  content,
});

export const renameNote = (oldName: string, newName: string) => ({
  type: "RENAME_NOTE",
  oldName,
  newName,
});
