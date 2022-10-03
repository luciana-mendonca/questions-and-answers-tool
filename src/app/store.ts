import { configureStore } from "@reduxjs/toolkit";

import questionsAndAswersReducer from "../slices/questionAndAnswerSlice";

const store = configureStore({
  reducer: { questionsAndAnswers: questionsAndAswersReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export { store };
