import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 30px;
  justify-content: space-evenly;
  padding: 10px;
`;

const FormPanel = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  max-width: 800px;
  padding: 10px 0;

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
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  textarea {
    height: 60px;
    resize: none;
  }
`;
export { FormWrapper, FormPanel };
