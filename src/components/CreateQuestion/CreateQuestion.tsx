import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addQuestionAndAnswer } from "../../slices/questionAndAnswerSlice";
import { Button } from "../Button";
import { v4 as uuid } from "uuid";

const CreateQuestions: React.FC<CreateQuestionsProps> = () => {
  const [inputValue, setInputValue] = useState<{
    question: string;
    answer: string;
  }>({
    question: "",
    answer: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();

      dispatch(
        addQuestionAndAnswer({
          id: uuid(),
          question: inputValue.question,
          answer: inputValue.answer,
        })
      );
      // Clear the form after submit and close the modal
      setInputValue({ question: "", answer: "" });
    },
    [dispatch, inputValue.answer, inputValue.question]
  );
  return (
    <>
      <div style={{ margin: "40px" }}>
        <form onSubmit={handleSubmit}>
          <label htmlFor='question-id'>Question</label>
          <br />
          <input
            id='question-id'
            type='text'
            value={inputValue.question}
            name='question'
            onChange={(event) =>
              setInputValue({
                question: event?.target.value,
                answer: inputValue.answer,
              })
            }
            required
          />
          <br />
          <br />
          <label htmlFor='answer-id'>Answer</label>
          <br />
          <textarea
            id='answer-id'
            value={inputValue.answer}
            name='answer'
            onChange={(event) =>
              setInputValue({
                question: inputValue.question,
                answer: event?.target.value,
              })
            }
            required
          />
          <br />
          <br />
          <Button type='submit'>Submit</Button>
        </form>
      </div>
    </>
  );
};

export interface CreateQuestionsProps {}

export default CreateQuestions;