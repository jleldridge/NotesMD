export const addNote = () => ({
  type: "ADD_NOTE",
});

export const setEditingNote = (id: string) => ({
  type: "SET_EDITING_NOTE",
  id,
});
