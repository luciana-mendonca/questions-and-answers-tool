import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";

import questionsAndAswersReducer from "../slices/questionAndAnswerSlice";

const store = configureStore({
  reducer: { questionsAndAnswers: questionsAndAswersReducer },
});

const rootReducer = combineReducers({
  questionsAndAnswers: questionsAndAswersReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

// export type RootState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export { store };
