import { store } from "../app/store";
import {
  addQuestionAndAnswer,
  deleteQuestionAndAnswer,
} from "./questionAndAnswerSlice";

describe("Question and answer reducer", () => {
  it("should save data in the store", async () => {
    store.dispatch(
      addQuestionAndAnswer({
        id: "1",
        question: "What's your favorite musical instrument?",
        answer: "Drums",
      })
    );

    const { list } = store.getState();

    expect(list).toEqual([
      {
        id: "1",
        question: "What's your favorite musical instrument?",
        answer: "Drums",
      },
    ]);

    expect(list).toHaveLength(1);
  });

  it("should delete data from the store", async () => {
    store.dispatch(
      deleteQuestionAndAnswer({
        id: "1",
        question: "What's your favorite musical instrument?",
        answer: "Drums",
      })
    );

    const { list } = store.getState();

    expect(list).toEqual([]);
    expect(list).toHaveLength(0);
  });
});
