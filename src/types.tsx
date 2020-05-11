export type Note = {
  content: string;
  editing: boolean;
};

export type RootState = {
  notes: Note[];
};
