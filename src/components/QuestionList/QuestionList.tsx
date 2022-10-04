import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  clearList,
  selectQuestionsAndAnswers,
} from "../../slices/questionAndAnswerSlice";
import { QuestionAndAnswer } from "../../types";
import { Button } from "../Button";
import { QuestionListItem } from "../QuestionListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownZA,
  faArrowUpAZ,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { Heading } from "../Heading";
import { Tooltip } from "../Tooltip";
import EmptyState from "./components/EmptyState";
import QuestionListWrapper from "./components/QuestionListWrapper";
import QuestionListHeader from "./components/QuestionListHeader";

const QuestionList: React.FC<QuestionListProps> = () => {
  const [sortQuestions, setSortQuestions] = useState<boolean>(false);
  const dispatch = useDispatch();

  // Get questions from the store
  const questionAndAnswerList = useSelector(
    selectQuestionsAndAnswers,
    shallowEqual
  );

  // Sort questions in alphabetical order
  const sortedList = [...questionAndAnswerList].sort((a, b) =>
    a.question.toLowerCase() > b.question.toLowerCase() ? 1 : -1
  );

  const list = !sortQuestions ? questionAndAnswerList : sortedList;

  // Delete all questions from local storage and remove from the view
  const deleteAllQuestionsAndAnswers = (): void => {
    dispatch(clearList());
  };

  return (
    <QuestionListWrapper>
      <QuestionListHeader>
        <Heading headingLevel='h2'>Created questions</Heading>
        <Tooltip content='Here you can find the created questions and their answers.'>
          <FontAwesomeIcon icon={faCircleInfo} focusable tabIndex={1} />
        </Tooltip>
        <div>
          <Button
            aria-label='Sort button alphabetically'
            variant='icon'
            type='button'
            onClick={(): void => setSortQuestions(!sortQuestions)}
          >
            {sortQuestions ? (
              <FontAwesomeIcon icon={faArrowDownZA} />
            ) : (
              <FontAwesomeIcon icon={faArrowUpAZ} />
            )}
          </Button>
          <Button
            type='button'
            variant='danger'
            onClick={deleteAllQuestionsAndAnswers}
          >
            Delete all questions
          </Button>
        </div>
      </QuestionListHeader>

      {list.map((item: QuestionAndAnswer) => {
        return (
          <QuestionListItem
            key={item.id}
            id={item.id}
            title={item.question}
            content={item.answer}
          />
        );
      })}
      {!list.length && <EmptyState>No questions yet!</EmptyState>}
    </QuestionListWrapper>
  );
};

export interface QuestionListProps {}

export default QuestionList;
