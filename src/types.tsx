export type RootState = {
  notes: Map<string, Note>;
  currentNoteId?: string;
};

export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};
