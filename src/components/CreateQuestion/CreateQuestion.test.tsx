import { fireEvent, screen } from "@testing-library/react";
import { store } from "../../app/store";
import { addQuestionAndAnswer } from "../../slices/questionAndAnswerSlice";
import { renderWithProvider } from "../../test-utils/testUtils";
import CreateQuestion from "./CreateQuestion";

describe("<CreateQuestion />", () => {
  it("should dispatch the input values and save them in store", async () => {
    renderWithProvider(<CreateQuestion />);

    const triggerModalButton = screen.getByText("Create question");

    fireEvent.click(triggerModalButton);

    const questionInput = screen.getByLabelText<HTMLInputElement>("Question");
    const answerInput = screen.getByLabelText<HTMLInputElement>("Answer");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(questionInput, {
      target: { value: "What is your favorite animal?" },
    });

    fireEvent.change(answerInput, {
      target: { value: "Dog" },
    });

    store.dispatch(
      addQuestionAndAnswer({
        id: "1",
        question: questionInput.value,
        answer: answerInput.value,
      })
    );

    const { list } = store.getState();

    expect(list).toEqual([
      { id: "1", question: "What is your favorite animal?", answer: "Dog" },
    ]);

    expect(questionInput.value).toBe("What is your favorite animal?");
    expect(answerInput.value).toBe("Dog");

    // Clear the form after clicking on submit
    fireEvent.click(submitButton);

    // Reopen the modal
    fireEvent.click(triggerModalButton);

    expect(screen.getByLabelText<HTMLInputElement>("Question").value).toBe("");
    expect(screen.getByLabelText<HTMLInputElement>("Answer").value).toBe("");
  });
});
