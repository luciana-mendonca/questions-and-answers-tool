import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteQuestionAndAnswer,
  updateQuestionAndAnswer,
} from "../../slices/questionAndAnswerSlice";
import { QuestionAndAnswer } from "../../types";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faPenToSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import QuestionListItemWrapper from "./components/QuestionListItemWrapper";
import { Heading } from "../Heading";
import QuestionItemActionsWrapper from "./components/QuestionItemActionsWrapper";

const QuestionListItem: React.FC<QuestionListItemProps> = ({
  content,
  id,
  title,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<{
    question: string;
    answer: string;
  }>({
    question: "",
    answer: "",
  });
  const dispatch = useDispatch();

  // Edit previously created a question and answer
  const handleUpdate = useCallback(
    (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();

      setInputValue({
        question: inputValue.question,
        answer: inputValue.answer,
      });

      // Trigger the state update
      dispatch(
        updateQuestionAndAnswer({
          id: id,
          question: inputValue.question,
          answer: inputValue.answer,
        })
      );
      // Clear the inputs and close the modal
      setInputValue({ question: "", answer: "" });
      setModalOpen(false);
    },
    [dispatch, id, inputValue.answer, inputValue.question]
  );

  // Delete the current selected item of the question list
  const deleteItem = () => {
    dispatch(
      deleteQuestionAndAnswer({
        id: id,
        question: title,
        answer: content,
      })
    );
  };

  return (
    <QuestionListItemWrapper>
      <QuestionItemActionsWrapper>
        <Heading headingLevel='h4'>{title}</Heading>
        <div>
          <Button
            aria-label='Edit button'
            variant='icon'
            type='button'
            onClick={(): void => setModalOpen(!modalOpen)}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </Button>
          <Button
            aria-label='Delete button'
            variant='icon'
            type='button'
            onClick={deleteItem}
          >
            <FontAwesomeIcon icon={faXmark} />
          </Button>
          <Button
            aria-label={expanded ? "Expand button" : "Collapse button"}
            variant='icon'
            type='button'
            onClick={(): void => setExpanded(!expanded)}
          >
            {expanded ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </Button>
        </div>
      </QuestionItemActionsWrapper>
      {expanded && <div>{content}</div>}
      {modalOpen && (
        <Modal
          modalTitle='Edit question and answer'
          modalTitleTooltipContent='Here you can edit the current question and its answer.'
          isOpen={modalOpen}
          setModalOpen={setModalOpen}
        >
          <form onSubmit={(event): void => handleUpdate(event)}>
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
            <label htmlFor='edited-answer-id'>Answer</label>
            <br />
            <textarea
              id='edited-answer-id'
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
        </Modal>
      )}
    </QuestionListItemWrapper>
  );
};

export interface QuestionListItemProps {
  content: string;
  id: QuestionAndAnswer["id"];
  title: string;
}

export default QuestionListItem;
