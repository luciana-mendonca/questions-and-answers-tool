import styled from "styled-components";

const ModalHeader = styled.div`
  align-items: baseline;
  display: flex;
  gap: 30px;
  justify-content: space-between;

  & > :first-child {
    align-items: baseline;
    display: flex;
    gap: 4px;
  }

  button {
    line-height: 1;
    padding: 4px;
  }
`;

export default ModalHeader;
