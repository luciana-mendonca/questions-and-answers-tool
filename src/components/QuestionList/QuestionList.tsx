import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { selectQuestionsAndAnswers } from "../../slices/questionAndAnswerSlice";
import { QuestionAndAnswer } from "../../types";

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
      {questionAndAnswerList.map((item: QuestionAndAnswer) => {
        return (
          <div key={item.id}>
            <div>{item.question}</div>
            <div>{item.answer}</div>
          </div>
        );
      })}
    </div>
  );
};

export interface QuestionsListProps {}

export default QuestionsList;
