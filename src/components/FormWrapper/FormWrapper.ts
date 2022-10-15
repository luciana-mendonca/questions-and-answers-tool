import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 30px;
  justify-content: space-evenly;
  padding: 10px;

  p {
    color: #b81414;
    font-weight: 500;
  }

  label {
    font-weight: 600;
    margin-right: 20px;
  }

  input,
  textarea {
    border: 2px solid #2f3e4e;
    border-radius: 5px;
    height: 30px;
    width: 100%;

    &:focus {
      background-color: #ffffff;
      border-width: 2px;
      border-color: transparent;
      outline: 2px solid #2f3e4e;
    }
  }

  textarea {
    height: 60px;
    resize: none;
  }
`;

const FormPanel = styled.div`
  max-width: 800px;
  padding: 10px 0;
`;

const CheckboxContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 20px;

  label {
    font-weight: 500;
  }

  input {
    accent-color: #2f3e4e;
    height: 16px;
    width: 16px;
`;

export { FormWrapper, FormPanel, CheckboxContainer };
