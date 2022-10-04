import styled, { css } from "styled-components";

const TooltipContainer = styled.div<TooltipContainerProps>(
  ({ left, top }) =>
    css`
      position: absolute;
      border-radius: 4px;
      left: ${left};
      top: ${top};
      transform: translateX(-50%);
      padding: 6px;
      color: white;
      background: black;
      font-size: 14px;
      line-height: 1;
      z-index: 7000;
      max-width: 300px;
    `
);

interface TooltipContainerProps {
  left: string;
  top: string;
}

export default TooltipContainer;
