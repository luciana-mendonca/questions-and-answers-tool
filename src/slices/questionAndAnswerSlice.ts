import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
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
    clearList: () => {
      storage.removeItem("persist:root");
      return initialState;
    },
    deleteQuestionAndAnswer: (
      state: QuestionAndAnswerState,
      action: PayloadAction<QuestionAndAnswer>
    ) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id);
    },
    updateQuestionAndAnswer: (
      state: QuestionAndAnswerState,
      action: PayloadAction<QuestionAndAnswer>
    ) => {
      state.list = state.list.map((item) => {
        return item.id === action.payload.id ? action.payload : item;
      });
    },
  },
});

export const selectQuestionsAndAnswers = (
  state: RootState
): QuestionAndAnswer[] => state.list;

export const {
  addQuestionAndAnswer,
  clearList,
  deleteQuestionAndAnswer,
  updateQuestionAndAnswer,
} = questionAndAnswerSlice.actions;

export default questionAndAnswerSlice.reducer;
