export type Note = {
  name: string;
  createdAt: string;
  content: string;
};

export type RootState = {
  notes: Note[];
  notesMap: { [name: string]: number };
  currentNote: string;
};
