import styled from "styled-components";

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 100vh;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  z-index: 2;
`;

export default Backdrop;
