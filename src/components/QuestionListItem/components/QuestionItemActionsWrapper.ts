import styled from "styled-components";

const QuestionItemActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > :last-child {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export default QuestionItemActionsWrapper;
