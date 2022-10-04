import styled from "styled-components";

const QuestionListHeader = styled.div`
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 15px 15px -15px #2f3e4e;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;

  & > div > svg:first-of-type {
    color: #3092fa;
    height: 24px;
    line-height: 10px;
    margin-left: 8px;
    width: 24px;
  }

  & > :last-child {
    display: flex;
    gap: 20px;
    margin-left: auto;
  }
`;

export default QuestionListHeader;
