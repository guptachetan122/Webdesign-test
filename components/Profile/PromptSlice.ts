import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Item from "antd/lib/list/Item";

type PromptState = {
  title: string;
  description: string;
}[];

let initialState: PromptState = [
  {
    title: "a life goal of mine",
    description: "",
  },
  {
    title: "apparently, my life’s soundtrack is",
    description: "",
  },
  {
    title: "biggest risk i’ve taken",
    description: "",
  },
  {
    title: "give me travel tips for",
    description: "",
  },
  {
    title: "most spontaneous thing i’ve done",
    description: "",
  },
  {
    title: "my most controversial opinion is",
    description: "",
  },
  {
    title: "never have i ever",
    description: "",
  },
  {
    title: "two truths and a lie",
    description: "",
  },
  {
    title: "what i order for the table",
    description: "",
  },
  {
    title: "superconnect with me for...",
    description: "",
  },
  {
    title: "i feel empowered when...",
    description: "",
  },
  {
    title: "a passion project i am working on now is...",
    description: "",
  },
  {
    title: "i am confused about...",
    description: "",
  },
];

export const PromptSlice = createSlice({
  name: "promptSlice",
  initialState,
  reducers: {
    updatePrompt: (
      state,
      {
        payload: { title, description },
      }: PayloadAction<{ title: string; description: string }>
    ) => {
      state.map((Item) => {
        if (Item.title === title) {
          Item.description = description;
        }
      });
    },
    removePrompt: (
      state,
      {
        payload: { title, description },
      }: PayloadAction<{ title: string; description: string }>
    ) => {
      state.map((Item) => {
        if (Item.description === description) {
          Item.description = "";
        }
      });
    },
  },
});

export const { updatePrompt, removePrompt } = PromptSlice.actions;

export default PromptSlice.reducer;
