export const addNote = () => ({
  type: "ADD_NOTE",
});

export const setCurrentNote = (name: string) => ({
  type: "SET_CURRENT_NOTE",
  name,
});
