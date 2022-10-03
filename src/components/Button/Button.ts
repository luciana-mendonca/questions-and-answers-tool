import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";

const Button = styled.button<ButtonProps>(
  ({ variant = "primary" }) => css`
    background-color: pink;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 700;
    padding: 0.75rem 1.25rem 0.75rem 1.25rem;

    &:hover {
      background-color: violet;
    }
    &:focus {
      outline: 2px solid yellow;
    }
  `
);

type ButtonVariants = "danger" | "icon" | "primary";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
}
export default Button;
