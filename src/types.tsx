export type Note = {
  name: string;
  createdAt: string;
  content: string;
  id: string;
};

export type RootState = {
  notes: { [id: string]: Note };
  editingNoteId: string;
};
