import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { selectQuestionsAndAnswers } from "../../slices/questionAndAnswerSlice";
import { QuestionAndAnswer } from "../../types";
import { QuestionListItem } from "../QuestionListItem";

const QuestionsList: React.FC<QuestionsListProps> = () => {
  // Get questions from the store
  const questionAndAnswerList = useSelector(
    selectQuestionsAndAnswers,
    shallowEqual
  );

  return (
    <div
      style={{ outline: "1px solid black", margin: "10px", padding: "10px" }}
    >
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
