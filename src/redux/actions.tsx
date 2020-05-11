export const addNote = (editing: boolean, content: string) => ({
  type: "ADD_NOTE",
  editing,
  content,
});
