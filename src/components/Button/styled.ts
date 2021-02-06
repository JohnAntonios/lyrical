import { ButtonHTMLAttributes, DOMAttributes } from "react";
import styled from "styled-components";
import theme from "@constants/theme";

export interface ButtonProps {
  /** Text content inside the Button. */
  text: string;
  /** Click event callback. */
  onClick?: DOMAttributes<HTMLButtonElement>['onClick'];
  /** Type of Button. Default = `button`. */
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export const StyledButton = styled.button`
  border: none;
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  border-radius: 0.5rem;
  color: white;
  font-size: 2rem;
  font-family: ${theme.font};
  background-color: ${theme.colours.primary};
  transition: all 0.3s ease;
  &:hover {
    background-color: ${theme.colours.primaryDark};
  }
  &:active,
  &:focus {
    outline: none;
    background-color: ${theme.colours.primaryDark};
    box-shadow: 0rem 0rem 2rem ${theme.colours.primaryDarker};
  }
`;
