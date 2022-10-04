import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import {
  clearList,
  selectQuestionsAndAnswers,
} from "../../slices/questionAndAnswerSlice";
import { QuestionAndAnswer } from "../../types";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { QuestionListItem } from "../QuestionListItem";

const QuestionsList: React.FC<QuestionsListProps> = () => {
  const dispatch = useDispatch();

  // Get questions from the store
  const questionAndAnswerList = useSelector(
    selectQuestionsAndAnswers,
    shallowEqual
  );

  // Delete all questions from local storage and remove from the view
  const deleteAllQuestionsAndAnswers = (): void => {
    dispatch(clearList());
  };

  return (
    <div
      style={{ outline: "1px solid black", margin: "10px", padding: "10px" }}
    >
      <Heading headingLevel='h2'>Created questions</Heading>
      <FontAwesomeIcon icon={faCircleInfo} />
      <Button type='button' onClick={deleteAllQuestionsAndAnswers}>
        Delete all questions
      </Button>
      {questionAndAnswerList?.map((item: QuestionAndAnswer) => {
        return (
          <QuestionListItem
            key={item.id}
            id={item.id}
            title={item.question}
            content={item.answer}
          />
        );
      })}
    </div>
  );
};

export interface QuestionsListProps {}

export default QuestionsList;
