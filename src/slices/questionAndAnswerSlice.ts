import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { QuestionAndAnswerState, QuestionAndAnswer } from "../types";

const initialState: QuestionAndAnswerState = {
  list: [],
};

export const questionAndAnswerSlice = createSlice({
  name: "questionsAndAnswers",
  initialState,
  reducers: {
    addQuestionAndAnswer: (
      state: QuestionAndAnswerState,
      action: PayloadAction<QuestionAndAnswer>
    ) => {
      state.list.push(action.payload);
    },
  },
});

export const selectQuestionsAndAnswers = (state: RootState) =>
  state.questionsAndAnswers.list;

export const { addQuestionAndAnswer } = questionAndAnswerSlice.actions;

export default questionAndAnswerSlice.reducer;