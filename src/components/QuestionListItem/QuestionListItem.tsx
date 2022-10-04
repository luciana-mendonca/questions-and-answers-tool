import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteQuestionAndAnswer } from "../../slices/questionAndAnswerSlice";
import { QuestionAndAnswer } from "../../types";
import { Button } from "../Button";

const QuestionListItem: React.FC<QuestionListItemProps> = ({
  content,
  id,
  title,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const dispatch = useDispatch();

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
    <div
      style={{
        border: "2px solid black",
        margin: "8px",
        borderRadius: "10px",
        maxHeight: "400px",
        padding: "10px",
      }}
    >
      <div style={{ display: "flex" }}>
        <span>{title}</span>
        <div style={{ marginLeft: "auto" }}>
          <Button type='button' onClick={deleteItem}>
            Delete
          </Button>
          <Button type='button' onClick={(): void => setExpanded(!expanded)}>
            Expand
          </Button>
        </div>
      </div>
      {expanded && <div>{content}</div>}
    </div>
  );
};

export interface QuestionListItemProps {
  content: string;
  id: QuestionAndAnswer["id"];
  title: string;
}

export default QuestionListItem;
