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
    deleteQuestionAndAnswer: (
      state: QuestionAndAnswerState,
      action: PayloadAction<QuestionAndAnswer>
    ) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const selectQuestionsAndAnswers = (
  state: RootState
): QuestionAndAnswer[] => state.list;

export const { addQuestionAndAnswer, deleteQuestionAndAnswer } =
  questionAndAnswerSlice.actions;

export default questionAndAnswerSlice.reducer;
