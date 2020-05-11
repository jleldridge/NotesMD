import { RootState } from "../types";
import { v4 as uuid } from "uuid";

export default function getUniqueName(
  state: RootState,
  name = "New Note"
): string {
  const { notes } = state;
  if (!notes[name]) {
    return name;
  }

  for (let i = 1; i < 10000; i++) {
    const newName = `${name} (${i})`;
    if (!notes[newName]) {
      return newName;
    }
  }

  return uuid();
}
