import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";

const Button = styled.button<ButtonProps>(
  ({ variant = "primary" }) => css`
    background-color: transparent;
    border: 2px solid #2f3e4e;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    padding: 8px 10px;

    svg {
      height: 20px;
      width: 24px;
    }

    &:hover {
      background-color: #e2effd;
    }
    &:focus {
      border: 2px solid #3092fa;
      outline-color: #3092fa;
    }

    ${variant === "danger" &&
    css`
      background-color: #b81414;
      border: 2px solid transparent;
      color: #ffffff;

      &:hover {
        background-color: #ad1515;
      }

      &:focus {
        border: 2px solid #ad1515;
        outline-color: #2f3e4e;
      }
    `}
  `
);

type ButtonVariants = "danger" | "icon" | "primary";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
}
export default Button;
