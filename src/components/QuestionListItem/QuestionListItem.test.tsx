import {
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithProvider } from "../../test-utils/testUtils";
import QuestionListItem from "./QuestionListItem";

describe("<QuestionListItem />", () => {
  it("should render questions and answers from the store", () => {
    renderWithProvider(
      <QuestionListItem
        content='Cat'
        id='2'
        title='What is your favorite animal?'
      />
    );

    const questionItem = screen.getByText("What is your favorite animal?");
    const answerItem = screen.queryByText("Cat");

    expect(questionItem).toBeInTheDocument();
    // The answer should be hidden by default
    expect(answerItem).not.toBeInTheDocument();

    // Click the expand trigger button to display the answer
    const expandAnswerTrigger = screen.getByText("Expand");

    fireEvent.click(expandAnswerTrigger);

    expect(screen.getByText("Cat")).toBeInTheDocument();
  });

  it("should delete a question when clicking on the delete button", async () => {
    renderWithProvider(
      <QuestionListItem
        content='Pizza'
        id='3'
        title='What is your favorite food?'
      />
    );

    const questionItem = screen.getByText("What is your favorite food?");

    expect(questionItem).toBeInTheDocument();

    // Click the expand trigger button to display the answer
    const deleteItemButton = screen.getByText("Delete");

    userEvent.click(deleteItemButton);

    // eslint-disable-next-line jest/valid-expect-in-promise
    waitForElementToBeRemoved(questionItem).then(() => {
      expect(
        screen.queryByText("What is your favorite food?")
      ).not.toBeInTheDocument();
    });
  });
});
