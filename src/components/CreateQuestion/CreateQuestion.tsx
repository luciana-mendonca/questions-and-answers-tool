import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { v4 as uuid } from "uuid";
import { addQuestionAndAnswer } from "../../slices/questionAndAnswerSlice";
import { FormPanel, FormWrapper } from "../FormWrapper";

const CreateQuestion: React.FC<CreateQuestionProps> = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
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
      setModalOpen(false);
    },
    [dispatch, inputValue.answer, inputValue.question]
  );

  return (
    <>
      <Button type='button' onClick={(): void => setModalOpen(!modalOpen)}>
        Create question
      </Button>
      {modalOpen && (
        <Modal
          modalTitle='Add a new question and answer'
          modalTitleTooltipContent='Here you can create new questions and their answers.'
          isOpen={modalOpen}
          setModalOpen={() => setModalOpen(!modalOpen)}
        >
          <FormWrapper>
            <form onSubmit={handleSubmit}>
              <FormPanel>
                <label htmlFor='question-id'>Question</label>
                <input
                  id='question-id'
                  type='text'
                  value={inputValue.question}
                  name='question'
                  autoComplete='off'
                  onChange={(event) =>
                    setInputValue({
                      question: event?.target.value,
                      answer: inputValue.answer,
                    })
                  }
                  required
                />
                <p>*required</p>
              </FormPanel>
              <FormPanel>
                <label htmlFor='answer-id'>Answer</label>
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
                <p>*required</p>
              </FormPanel>
              <Button type='submit'>Submit</Button>
            </form>
          </FormWrapper>
        </Modal>
      )}
    </>
  );
};

export interface CreateQuestionProps {}

export default CreateQuestion;
