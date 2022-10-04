import styled from "styled-components";

const QuestionListItemWrapper = styled.div`
  border: 2px solid #2f3e4e;
  border-radius: 10px;
  margin: 8px;
  max-height: 400px;
  padding: 10px;

  &:hover {
    background-color: #e2effd;
  }

  button:hover {
    background-color: #fdebfe;
  }

  &:nth-child(even) {
    &:hover {
      background-color: #fdebfe;
    }
    button:hover {
      background-color: #e2effd;
    }
  }
`;

export default QuestionListItemWrapper;
