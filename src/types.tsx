export type Note = {
  name: string;
  createdAt: string;
  content: string;
};

export type RootState = {
  notes: { [name: string]: Note };
  currentNote: string;
};
