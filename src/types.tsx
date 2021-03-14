export type RootState = {
  cards: Map<string, Card>;
  currentCardId?: string;
};

export type Card = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};
