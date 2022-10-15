import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { Backdrop } from "../Modal/components";

const LoadingSpinnerWrapper = styled.div`
  align-items: center;
  color: black;
  display: flex;
  fontsize: 18px;
  flex-direction: column;
  height: auto;
  left: 50%;
  padding: 30px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);

  & > span {
    background-color: #e2effd;
    border-radius: 5px;
    font-weight: 500;
    padding: 10px;
  }
`;

const StyledLoadingSpinner = styled.div`
  animation: spin 1s linear infinite;
  border: 10px solid #e2effd;
  border-radius: 50%;
  border-top: 10px solid #3092fa;
  height: 60px;
  margin: 20px 0;
  width: 60px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const LoadingSpinner: React.FC<LoadingSpinnerProps> = () => {
  return (
    <Backdrop>
      <LoadingSpinnerWrapper>
        <StyledLoadingSpinner />
        <span>Loading...</span>
      </LoadingSpinnerWrapper>
    </Backdrop>
  );
};

export interface LoadingSpinnerProps extends HTMLAttributes<HTMLDivElement> {}

export default LoadingSpinner;
