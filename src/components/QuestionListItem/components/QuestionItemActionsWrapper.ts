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

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px;

    & > :last-child {
      flex-direction: row;
      flex-wrap: nowrap;
      margin-bottom: 20px;
    }
  }
`;

export default QuestionItemActionsWrapper;
