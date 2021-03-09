export type RootState = {
  notes: Map<string, Note>;
  currentNote?: Note;
};

export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};
