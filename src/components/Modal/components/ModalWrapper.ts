import styled from "styled-components";

const ModalWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  height: auto;
  left: 50%;
  padding: 30px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 33%;
  z-index: 6000;
`;

export default ModalWrapper;
